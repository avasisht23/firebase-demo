import * as Amplitude from 'expo-analytics-amplitude';

var isInitialized = false;
var apiKey = "01c7475db2199d1f388445bf569ec3de";

export const events = {
  USER_LOGGED_IN: 'USER_LOGGED_IN',
  USER_LOGGED_OUT: 'USER_LOGGED_OUT',
  USER_CREATED_ACCOUNT: 'USER_CREATED_ACCOUNT',
  USER_RESET_PASSWORD: 'USER_RESET_PASSWORD',
  USER_LINKED_SOCIAL: 'USER_LINKED_SOCIAL',
  USER_UPDATED_EMAIL: 'USER_UPDATED_EMAIL',
  USER_UPDATED_PROFILE: 'USER_UPDATED_PROFILE',
  USER_UPDATED_LINKS: 'USER_UPDATED_SOCIAL_LINKS',
  USER_UPDATED_PRIVACY: 'USER_UPDATED_PRIVACY',
  USER_REMOVED_PROJECT: 'USER_REMOVED_PROJECT',
  USER_OPENED_CREATION: 'USER_OPENED_CREATION',
  USER_UPDATED_SETTINGS: 'USER_UPDATED_SETTINGS',
};

export function initialize(): void {
  if (isInitialized || !apiKey) {
    return;
  }

  Amplitude.initialize(apiKey);
  isInitialized = true;
}

// sets userid with optional properties
// imput : id (String), options (JSON object)
export function identify(id, properties) {
  initialize();

  if (id) {
    Amplitude.setUserId(id);
    if (properties) {
      Amplitude.setUserProperties(properties);
    }
  } else {
    Amplitude.clearUserProperties();
  }
}

// logs event with optional properties
// imput : id (String), options (JSON object)
export function track(logEvent, properties) {
  initialize();

  if (properties) {
    Amplitude.logEventWithProperties(logEvent, properties);
  } else {
    Amplitude.logEvent(logEvent);
  }
}

export default {
  events,
  initialize,
  identify,
  track,
};
