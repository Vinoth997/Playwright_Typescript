import { test, request, expect } from "@playwright/test";

test("Api testing post request 1", async ({ request }) => {
  const resp = await request.post("/booking", {
    data: {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "Breakfast",
    },
  });

  console.log(await resp.json());
  expect(resp.status()).toBe(200);
  expect(resp.statusText()).toBe("OK");
  expect(resp.ok()).toBeTruthy();

  const respJson = await resp.json();
  expect(respJson.booking).toMatchObject({
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: "2018-01-01", checkout: "2019-01-01" },
    additionalneeds: "Breakfast",
  });
  expect(respJson.booking.additionalneeds).toEqual("Breakfast");
});

test('Api with ui verification', async ({request, page}) => {
    const respon = await request.post("https://api.demoblaze.com/addtocart",{
        data:{"id":"9cf75bdd-a7d0-864e-74f0-ea3abd270eb3","cookie":"user=6a04b947-b00e-00ba-04d3-e4cacc77300f","prod_id":6,"flag":false}
    })
    expect(respon.status()).toBe(200);
})
