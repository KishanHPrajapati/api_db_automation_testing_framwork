import { test, expect } from '../../../fixtures/api-fixture';
import { createBookingData } from '../../../data/booking-data';

test('Delete booking', async ({ bookingApi }) => {
  const bookingData = createBookingData();
  const createResponse = await bookingApi.createBooking(bookingData);
  expect(createResponse.status()).toBe(200);
  const createBody = await createResponse.json();
  console.log("delete responce", createBody)
  const bookingId = createBody.bookingid;
  console.log('Created ID:', bookingId);
  // DELETE
  const deleteResponse = await bookingApi.deleteBooking(bookingId);
  expect([200, 201, 204]).toContain(deleteResponse.status());
  // VERIFY DELETE
  const responseAfterDelete = await bookingApi.getBooking(bookingId);
  expect(responseAfterDelete.status()).toBe(404);
});