// Source: https://github.com/zeit/next.js/tree/canary/examples/with-google-analytics
import { GA_TRACKING_ID } from "root/config";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
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