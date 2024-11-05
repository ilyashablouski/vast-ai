import { createSvgIcon } from '@mui/material';

export const Cross = createSvgIcon(
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L14 14" stroke="currentColor" />
    <path d="M14 2L2 14" stroke="currentColor" />
  </svg>,
  'Logo',
);

export default Cross;
