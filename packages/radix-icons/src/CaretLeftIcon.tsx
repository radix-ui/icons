import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const CaretLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CaretLeftIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.56808 4.43176C8.74382 4.6075 8.74382 4.89242 8.56808 5.06816L6.13628 7.49996L8.56808 9.93176C8.74382 10.1075 8.74382 10.3924 8.56808 10.5682C8.39234 10.7439 8.10742 10.7439 7.93168 10.5682L5.18168 7.81816C5.09729 7.73376 5.04988 7.6193 5.04988 7.49996C5.04988 7.38061 5.09729 7.26615 5.18168 7.18176L7.93168 4.43176C8.10742 4.25602 8.39234 4.25602 8.56808 4.43176Z"
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
          d="M8.95699 4.04286C9.34751 4.43339 9.34751 5.06655 8.95699 5.45708L6.91409 7.49997L8.95699 9.54286C9.34751 9.93339 9.34751 10.5666 8.95699 10.9571C8.56646 11.3476 7.9333 11.3476 7.54277 10.9571L4.79277 8.20708C4.60523 8.01954 4.49988 7.76519 4.49988 7.49997C4.49988 7.23475 4.60523 6.9804 4.79277 6.79286L7.54277 4.04286C7.9333 3.65234 8.56646 3.65234 8.95699 4.04286Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.56809 4.43176C8.74383 4.6075 8.74383 4.89242 8.56809 5.06816L6.13629 7.49996L8.56809 9.93176C8.74383 10.1075 8.74383 10.3924 8.56809 10.5682C8.39236 10.7439 8.10743 10.7439 7.9317 10.5682L5.1817 7.81816C5.09731 7.73376 5.0499 7.6193 5.0499 7.49996C5.0499 7.38061 5.09731 7.26615 5.1817 7.18176L7.9317 4.43176C8.10743 4.25602 8.39236 4.25602 8.56809 4.43176Z"
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
