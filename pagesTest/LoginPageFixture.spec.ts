import { test } from "../fixtures/POMFixture";
import { delay } from "../utils/utils";

test("Login", async({loginPage})=>{
    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce");
  await loginPage.verifySuccessfullLogin("Swag Labs");
  await delay(2000);
})