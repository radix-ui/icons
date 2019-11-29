import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
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
          d="M5.181 7.182l2.5-2.5.637.636L6.136 7.5l2.182 2.182-.637.636-2.5-2.5-.318-.318.318-.318z"
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
