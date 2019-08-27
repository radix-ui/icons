import * as React from 'react';
import { BaseIconProps } from './types';

interface FoodRamenIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const FoodRamenIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: FoodRamenIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M14.5 5.5l-1 5 1-5zm5-1l-3 6 3-6zm-6 10H5h8.5zm-1 6c-5 0-8-5-8-8h16c0 3-3 8-8 8z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FoodRamenIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default FoodRamenIcon;
