// Source: https://github.com/zeit/next.js/tree/canary/examples/with-google-analytics
import { GA_TRACKING_ID } from "root/config";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// window.gtag only exists once the visitor has accepted analytics cookies
// (see components/CookieConsent), so both helpers are no-ops until then.
export const pageview = (url) => {
  if (!window.gtag) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (!window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackDownload = (url) => {
  event({
    action: "download",
    category: "downloads",
    label: url,
  });
};