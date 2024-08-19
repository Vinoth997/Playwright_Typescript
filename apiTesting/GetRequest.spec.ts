import { test, request, expect } from "@playwright/test";

let reqContext2: any;
test.beforeAll("Before All the test", async () => {
  reqContext2 = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com/booking",
  });
});

test("Api Testing Get Method 1", async ({ request }) => {
  const resp1 = await request.get(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(await resp1.json());
});

test("Api Testing Get Method 2", async () => {
  const reqContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {
      Accept: "application/json",
    },
  });
  const resp1 = await reqContext.get("/booking");
  console.log(await resp1.json());
});

test("Api Testing Get Method 3", async () => {
  const reqContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
  });
  const resp1 = await reqContext.get("/booking/3");
  console.log(await resp1.json());
  expect(await resp1.status()).toBe(200);
  expect(await resp1.statusText()).toEqual("OK");
});

test("Api Testing Get", async () => {
  const resp1 = await reqContext2.get("/booking/7");
  console.log(await resp1.json());
  expect(resp1.status()).toBe(200);
  expect(resp1.statusText()).toEqual("OK");
  expect(resp1.OK()).toBeTruthy();
});

test("Api Testing base url from config", async ({ request }) => {
  const resp = await request.get("/booking/2402");
  console.log(await resp.json());
});

test("Api Testing with query parameter", async ({ request }) => {
  const resp = await request.get("/booking?firstname=John&lastname=Smith");
  console.log(await resp.json());
});

test("Api Testing passing query parameter", async ({ request }) => {
  const resp = await request.get("/booking", {
    params: {
      firstname: "John",
      lastname: "Smith",
    },
  });
  console.log(await resp.json());
});

test("Api Testing Get assert json object", async () => {
  const resp1 = await reqContext2.get("/booking/3868");
  console.log(await resp1.json());
  // expect(await resp1.json()).toMatchObject({
  //   firstname: "Jim",
  //   lastname: "Ericssn",
  // });
  const resp = await resp1.json();
  expect(resp.firstname).toEqual("Bob");
});

test("Api with UI verification", async ({ request, page }) => {
  const respn = await request.get("https://api.demoblaze.com/entries");
  const respJson = await respn.json();
  // console.log(respJson);
  // console.log(respJson.Items[0].title)
  await page.goto("https://www.demoblaze.com/#");
  await expect(
    page.getByRole("link", { name: "Samsung galaxy s6" })
  ).toHaveText(respJson.Items[0].title);
});
