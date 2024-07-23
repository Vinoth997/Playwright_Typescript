import { test as baseTest } from "@playwright/test";

type MyFixtures = {
  fixture1: string;
};

type MyWorkerFixtures = {
    workerFixture1: string;
}

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  fixture1: async ({}, use) => {
    const fixture1 = "I am Fixture1";
    console.log("Before part of Fixture1");
    await use(fixture1);
    console.log("After part of fixture");
  },

  workerFixture1: [async({}, use) => {
    const workerFixture1 = "I am Worker Fixture1";
    console.log("Before part of Worker Fixture1");
    await use(workerFixture1);
    console.log("After part of Worker fixture");
  },{scope: "worker"}]
});