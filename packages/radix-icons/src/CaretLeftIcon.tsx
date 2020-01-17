import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CaretLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretLeftIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.06808 4.93177C8.24382 5.10751 8.24382 5.39243 8.06808 5.56817L6.13628 7.49997L8.06808 9.43177C8.24382 9.60751 8.24382 9.89243 8.06808 10.0682C7.89235 10.2439 7.60742 10.2439 7.43169 10.0682L5.18169 7.81817C5.0973 7.73378 5.04988 7.61932 5.04988 7.49997C5.04988 7.38063 5.0973 7.26617 5.18169 7.18177L7.43169 4.93177C7.60742 4.75604 7.89235 4.75604 8.06808 4.93177Z"
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
          d="M8.45699 4.54286C8.84751 4.93339 8.84751 5.56655 8.45699 5.95708L6.91409 7.49997L8.45699 9.04286C8.84751 9.43339 8.84751 10.0666 8.45699 10.4571C8.06646 10.8476 7.4333 10.8476 7.04277 10.4571L4.79277 8.20708C4.60523 8.01954 4.49988 7.76519 4.49988 7.49997C4.49988 7.23475 4.60523 6.9804 4.79277 6.79286L7.04277 4.54286C7.4333 4.15234 8.06646 4.15234 8.45699 4.54286Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.06809 4.93177C8.24383 5.10751 8.24383 5.39243 8.06809 5.56817L6.13629 7.49997L8.06809 9.43177C8.24383 9.60751 8.24383 9.89243 8.06809 10.0682C7.89236 10.2439 7.60743 10.2439 7.4317 10.0682L5.1817 7.81817C5.09731 7.73378 5.0499 7.61932 5.0499 7.49997C5.0499 7.38063 5.09731 7.26617 5.1817 7.18177L7.4317 4.93177C7.60743 4.75604 7.89236 4.75604 8.06809 4.93177Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretLeftIcon;
