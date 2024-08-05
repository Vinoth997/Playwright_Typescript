import {test as baseTest} from "@playwright/test"

type MyFixture = {
    logindata:any;
    testdata:any;
    urldata:any;
}

export const test = baseTest.extend<MyFixture>({
    urldata:{
        appurl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    },
    logindata:{
        uname:"Admin",
        pwd:"admin123",
    },
    testdata:{
        fname:"John",
        mname:"D",
        lname:"Cena",
        email:"johncena@mail.com"
    }
})

export {expect} from "@playwright/test";