import { test, expect } from "@playwright/test";



test.describe("Annotation practice", async () => {
  test("Test 1", async ({ page }) => {
    console.log("Executing Test 1");
    console.log("Completed Executing Test 1");
  });

  test("Test 2", async ({ page }) => {
    console.log("Executing Test 2");
    console.log("Completed Executing Test 2");
  });

  test("Test 3", async ({ page }) => {
    console.log("Executing Test 3");
    console.log("Completed Executing Test 3");
  });
});

test.only("Test 4", async ({ page }) => {
  console.log("Executing Test 4");
  console.log("Completed Executing Test 4");
});

test("Test 5", async ({ page }) => {
  console.log("Executing Test 5");
  console.log("Completed Executing Test 5");
});
