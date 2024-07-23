import { test } from "../fixtures/CustomFixture";

test("Practice Test 1", async ({ fixture1, workerFixture1 }) => {
  console.log(fixture1);
  console.log(workerFixture1);
});

test("Practice Test 2", async ({ fixture1, workerFixture1 }) => {
  console.log(fixture1);
});
