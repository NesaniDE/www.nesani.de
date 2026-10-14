/**
 * HubSpot Meetings: bookings are linked to the CRM and Nedim's Google calendar.
 * The embed URL uses HubSpot's embedded scheduling layout.
 * An empty BOOKING_URL disables booking across the site.
 */
export const BOOKING_URL = "https://meetings-eu1.hubspot.com/nhasani";
export const BOOKING_EMBED_URL = `${BOOKING_URL}?embed=true`;
export const BOOKING_ENABLED = BOOKING_URL.length > 0;
export const BOOKING_DURATION_MIN = 30;
