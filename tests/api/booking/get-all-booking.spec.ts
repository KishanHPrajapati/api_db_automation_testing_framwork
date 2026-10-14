import { test, expect } from '../../../fixtures/api-fixture';
import { createBookingData } from '../../../data/booking-data';

test('Get booking by ID', async ({ bookingApi }) => {
  const response = await bookingApi.getAllBookings();
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body)
});