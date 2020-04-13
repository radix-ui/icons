import * as React from 'react';
import { BaseIconProps } from './types';

interface BackpackIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const BackpackIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: BackpackIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5 3C5 2.44772 5.44772 2 6 2H9C9.55228 2 10 2.44772 10 3V4H12C12.5523 4 13 4.44772 13 5V7C13 7.8888 12.6131 8.68734 12 9.23608V11.5C12 12.3284 11.3284 13 10.5 13H4.5C3.67157 13 3 12.3284 3 11.5V9.2359C2.38697 8.68721 2 7.88883 2 7V5C2 4.44772 2.44772 4 3 4H5V3ZM9 3V4H6V3H9ZM3 5H5H5.5H9.5H10H12V7C12 7.654 11.6866 8.23467 11.1997 8.6004C10.8655 8.85144 10.4508 9 10 9H8V8.5C8 8.22386 7.77614 8 7.5 8C7.22386 8 7 8.22386 7 8.5V9H5C4.5493 9 4.1346 8.85133 3.80029 8.60022C3.31335 8.23446 3 7.65396 3 7V5ZM7 10H5C4.64961 10 4.31292 9.93972 4 9.82905V11.5C4 11.7761 4.22386 12 4.5 12H10.5C10.7761 12 11 11.7761 11 11.5V9.82915C10.6871 9.93978 10.3504 10 10 10H8V10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5V10Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9 2.5H6C5.72386 2.5 5.5 2.72386 5.5 3V4.5H3C2.72386 4.5 2.5 4.72386 2.5 5V7C2.5 7.81791 2.89278 8.5439 3.5 9V11.5C3.5 12.0523 3.94772 12.5 4.5 12.5H10.5C11.0523 12.5 11.5 12.0523 11.5 11.5V9.00018C12.1072 8.54408 12.5 7.81791 12.5 7V5C12.5 4.72386 12.2761 4.5 12 4.5H9.5V3C9.5 2.72386 9.27614 2.5 9 2.5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5 3C5 2.44772 5.44772 2 6 2H9C9.55228 2 10 2.44772 10 3V4H12C12.5523 4 13 4.44772 13 5V7C13 7.8888 12.6131 8.68734 12 9.23608V11.5C12 12.3284 11.3284 13 10.5 13H4.5C3.67157 13 3 12.3284 3 11.5V9.2359C2.38697 8.68721 2 7.88883 2 7V5C2 4.44772 2.44772 4 3 4H5V3ZM9 3V4H6V3H9ZM3 5H5H5.5H9.5H10H12V7C12 7.654 11.6866 8.23467 11.1997 8.6004C10.8655 8.85144 10.4508 9 10 9H8V8.5C8 8.22386 7.77614 8 7.5 8C7.22386 8 7 8.22386 7 8.5V9H5C4.5493 9 4.1346 8.85133 3.80029 8.60022C3.31335 8.23446 3 7.65396 3 7V5ZM7 10H5C4.64961 10 4.31292 9.93972 4 9.82905V11.5C4 11.7761 4.22386 12 4.5 12H10.5C10.7761 12 11 11.7761 11 11.5V9.82915C10.6871 9.93978 10.3504 10 10 10H8V10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5V10Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BackpackIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BackpackIcon;
