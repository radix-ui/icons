import * as React from 'react';
import { IconProps } from './types';

export const BackpackIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M5 2C5 1.44772 5.44772 1 6 1H9C9.55228 1 10 1.44772 10 2V3H13C13.5523 3 14 3.44772 14 4V6C14 6.8888 13.6131 7.68734 13 8.23608V11.5C13 12.3284 12.3284 13 11.5 13H3.5C2.67157 13 2 12.3284 2 11.5V8.2359C1.38697 7.68721 1 6.88883 1 6V4C1 3.44772 1.44772 3 2 3H5V2ZM9 2V3H6V2H9ZM2 4H5H5.5H9.5H10H13V6C13 6.654 12.6866 7.23467 12.1997 7.6004C11.8655 7.85144 11.4508 8 11 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H4C3.5493 8 3.1346 7.85133 2.80029 7.60022C2.31335 7.23446 2 6.65396 2 6V4ZM7 9H4C3.64961 9 3.31292 8.93972 3 8.82905V11.5C3 11.7761 3.22386 12 3.5 12H11.5C11.7761 12 12 11.7761 12 11.5V8.82915C11.6871 8.93978 11.3504 9 11 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default BackpackIcon;
