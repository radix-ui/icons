import * as React from 'react';
import { BaseIconProps } from './types';

interface LayoutIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const LayoutIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LayoutIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9 5H6V10H9V5ZM10 5V10H13V5H10ZM2 5H5V10H2L2 5ZM2 4C1.44772 4 1 4.44772 1 5V10C1 10.5523 1.44772 11 2 11H13C13.5523 11 14 10.5523 14 10V5C14 4.44772 13.5523 4 13 4H2Z"
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
          d="M1 5C1 4.44772 1.44772 4 2 4H13C13.5523 4 14 4.44772 14 5V10C14 10.5523 13.5523 11 13 11H2C1.44772 11 1 10.5523 1 10V5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M9 5H6V10H9V5ZM10 5V10H13V5H10ZM2 5H5V10H2L2 5ZM2 4C1.44772 4 1 4.44772 1 5V10C1 10.5523 1.44772 11 2 11H13C13.5523 11 14 10.5523 14 10V5C14 4.44772 13.5523 4 13 4H2Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LayoutIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LayoutIcon;
