const {Builder, By, Key, until, sleep} = require("selenium-webdriver");

async function test1() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("http://localhost:1337");
  //await driver.findElement(By.id("sum")).sendKeys("20", Key.RETURN);
  //finding the input element
  if (driver.findElement(By.className("button")).click()) {
    console.log("Found button element");
  } else {
    console.log("unable to find button element");
  }
}

async function test2() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("http://localhost:1337/customer/payment");
  //await driver.findElement(By.id("sum")).sendKeys("20", Key.RETURN);
  //finding the input element
  if (driver.findElement(By.id("sum"))) {
    console.log("Found input element");
  } else {
    console.log("unable to find input element");
  }

  //finding the balance value
  //let balance = await driver.findElements(By.className("balance"));

  let currentBalance = await driver.wait(
    until.elementLocated(By.className("balance")),
    2000
  );
  //console.log("current balance:" + (await currentBalance.getText()));
  //console.log(typeof(currentBalance))

  //took balance value from page, convert into int value
  var balancestring = await currentBalance.getText();
  //console.log(typeof(balancestring));
  var splitstring = balancestring.slice(0, -2);
  //console.log(splitstring);

  //int value of p value from balance
  var stringToInt1 = parseInt(splitstring);
  console.log("start balance: " +stringToInt1);
  console.log(
     "Test checks starts value, add 20 to it and compares to see if its updated."
   );

  let startBalance = stringToInt1;

  //wait for 3 seconds
  await driver.sleep(2000);

  //enters value 20 and hits enter key
  await driver.findElement(By.id("sum")).sendKeys("20", Key.RETURN);
  await driver.navigate().refresh();

  //check updated value
  let updatedValue = await driver.wait(
    until.elementLocated(By.className("balance")),
    2000
  );

  //took balance value from page, convert into int value
  var balancestring2 = await updatedValue.getText();
  //console.log(typeof(balancestring));
  var splitstring2 = balancestring2.slice(0, -2);
  //console.log(splitstring);

  //int value of p value from balance
  var stringToInt2 = parseInt(splitstring2);
  //console.log(stringToInt2);

  let updatedBalance = stringToInt2;
  console.log("updated balance: " + updatedBalance);
  if (updatedBalance == startBalance+20) {
      console.log("Test passed!")

  }
  else {
      console.log("Test failed!")
  }

  //await driver.wait(until.elementLocated(By.id("sum")), 3000);//.sendKeys("20", Key.RETURN)
  //.findElement(By.id("sum"))
  //.sendKeys("20", Key.RETURN);

  //.then(driver.wait(navigate().refresh(),2000))

  /*
      .then(await driver.findElement(By.className("balance")));
      console.log("updated balance:" + (await currentBalance.getText()));
    */
  /*
    let updatedBalance = await driver.findElement(By.className("balance"));
    console.log(await updatedBalance.getText());
*/

  /*
    for (let e of balance) {
      foundBalance = await e.getText();
    }
    console.log(foundBalance);
    */

  //let value = driver.findElement(By.className("balance"));
  //console.log(value)
  //await driver.findElement(By.id("sum")).sendKeys("20", Key.RETURN);
  //let updatedValue = driver.findElement(By.id("sum"));
  //console.log(updatedValue)
}

test1();
//test2();