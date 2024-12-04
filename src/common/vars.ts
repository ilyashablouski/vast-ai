export const isLocalhost = window.location.hostname === 'localhost';
export const isProduction = process.env.NODE_ENV === 'production';

export const CURRENT_DATE_AND_TIME = new Date().toISOString();
