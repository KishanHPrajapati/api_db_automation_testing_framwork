import { test, expect } from '../../../fixtures/api-fixture';
// import { bookingData } from '../../../data/booking-data';
import { createBookingData } from '../../../data/booking-data';

test('Update booking', async ({ bookingApi }) => {
  const bookingData = createBookingData();
  const createResponse = await bookingApi.createBooking(bookingData);
  expect(createResponse.status()).toBe(200);
  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;
  const updateResponse =
    await bookingApi.updateBooking(
      bookingId,
      {
        ...bookingData,
        firstname: 'KishanUpdated'
      }
    );
  expect(updateResponse.status()).toBe(200);
  const body = await updateResponse.json();
  expect(body.firstname).toBe('KishanUpdated');
});