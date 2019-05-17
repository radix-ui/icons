import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretDownIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const CaretDownIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: CaretDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10 6L7.5 8.5 5 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `CaretDownIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CaretDownIcon;
