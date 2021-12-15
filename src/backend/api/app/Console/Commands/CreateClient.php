<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Account;

class CreateClient extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = "client:create {email} {abilities*}";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Create a client account and API key";

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $email = $this->argument("email");
        $abilities = $this->argument("abilities");
        $mightExist = Account::query()->firstWhere("email", "=", $email);
        if ($mightExist) {
            $this->error("Email already registered.");
            return;
        }

        $account = Account::create(["email" => $email]);
        $token = $account->createToken("client", ["client", ...$abilities])->plainTextToken;
        echo "$token\n";
        return Command::SUCCESS;
    }
}
