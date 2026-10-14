import { test, expect } from '../../../fixtures/api-fixture';
import { createBookingData  } from '../../../data/booking-data';


test('Create new booking', async ({ bookingApi }) => {
  const bookingData = createBookingData();
  const response = await bookingApi.createBooking(bookingData);
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(await response.json());
  expect(body.bookingid).toBeTruthy();
  expect(body.booking.firstname).toBe(bookingData.firstname);
  expect(body.booking.lastname).toBe(bookingData.lastname);
  expect(body.booking.totalprice).toBe(bookingData.totalprice);
  console.log('Booking ID:', body.bookingid);
});