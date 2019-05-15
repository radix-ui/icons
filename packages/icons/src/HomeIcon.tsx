import * as React from 'react';
import { BaseIconProps } from './types';

interface HomeIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const HomeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: HomeIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M5.5 11.914V20.5h5v-6h4v6h5v-8.586a1 1 0 0 0-.293-.707L12.5 4.5l-6.707 6.707a1 1 0 0 0-.293.707z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `HomeIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default HomeIcon;
