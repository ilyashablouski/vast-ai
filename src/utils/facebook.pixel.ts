import ReactPixel from 'react-facebook-pixel';

const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

export const initFacebookPixel = () => {
  ReactPixel.init(pixelId);
};

export const logPageViewFAB = () => {
  ReactPixel.pageView();
};

export const trackEventFAB = (eventName: string, data?: Record<string, string>) => {
  ReactPixel.track(eventName, data);
};
