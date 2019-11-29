import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CaretDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.182 9.818l-2.5-2.5.636-.636L7.5 8.864l2.182-2.182.636.636-2.5 2.5-.318.319-.318-.319z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretDownIcon;
