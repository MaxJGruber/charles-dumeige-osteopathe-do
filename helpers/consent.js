import { GA_TRACKING_ID } from "root/config";

// The visitor's cookie choice. Storing it is exempt from consent itself: it
// only records the answer, it does not track anyone.
const STORAGE_KEY = "cookie-consent";

// The CNIL recommends asking again after about six months, so an older answer
// is treated as no answer.
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;

const OPEN_EVENT = "cookie-consent:open";
const CHANGE_EVENT = "cookie-consent:change";

export const GRANTED = "granted";
export const DENIED = "denied";

// Fallback for when storage is blocked, so the banner can still be dismissed
// for the rest of the visit.
let sessionConsent = null;

export const readConsent = () => {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (!stored || Date.now() - stored.date > MAX_AGE_MS) return sessionConsent;
    return stored.value === GRANTED || stored.value === DENIED
      ? stored.value
      : sessionConsent;
  } catch {
    return sessionConsent;
  }
};

export const writeConsent = (value) => {
  sessionConsent = value;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ value, date: Date.now() })
    );
  } catch {
    // Private browsing can refuse storage; the banner then comes back on the
    // next visit.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

// For useSyncExternalStore: the choice can also change in another tab.
export const subscribeConsent = (callback) => {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
};

// Google Analytics honours this flag even once gtag.js is loaded, so a visitor
// who withdraws consent stops being measured without a reload.
export const setAnalyticsDisabled = (disabled) => {
  window[`ga-disable-${GA_TRACKING_ID}`] = disabled;
};

// Removes the _ga and _ga_<container> cookies. gtag sets them on the widest
// domain it can, so try every parent of the current host.
export const deleteAnalyticsCookies = () => {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  const parts = window.location.hostname.split(".");
  const domains = parts.map((_, i) => parts.slice(i).join("."));
  names.forEach((name) => {
    const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expired;
    domains.forEach((domain) => {
      document.cookie = `${expired}; domain=.${domain}`;
    });
  });
};

// Lets any link on the site (the footer, the legal page) reopen the banner.
export const openCookieSettings = () => {
  window.dispatchEvent(new Event(OPEN_EVENT));
};

export const onOpenCookieSettings = (handler) => {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
};
