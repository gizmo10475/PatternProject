<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Admin;

class CreateAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = "admin:create {email}";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Create an administrator";

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
        $mightExist = Admin::query()->firstWhere("email", "=", $email);
        if ($mightExist) {
            $this->error("Email already registered.");
            return;
        }
        $account = Admin::create(["email" => $email]);
        $token = $account->createToken("pattern", ["admin"])->plainTextToken;
        echo "Administrator account for $email created. Your access token is $token\n";
        return Command::SUCCESS;
    }
}
