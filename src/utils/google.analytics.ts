import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGoogleAnalytics = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageViewGA = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEventGA = (eventName: string, params?: Record<string, string>) => {
  ReactGA.event(eventName, params);
};
