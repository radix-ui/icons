import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
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
          d="M4.932 6.932a.45.45 0 01.636 0L7.5 8.864l1.932-1.932a.45.45 0 11.636.636l-2.25 2.25a.45.45 0 01-.636 0l-2.25-2.25a.45.45 0 010-.636z"
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
          d="M4.543 6.543a1 1 0 011.414 0L7.5 8.086l1.543-1.543a1 1 0 011.414 1.414l-2.25 2.25a1 1 0 01-1.414 0l-2.25-2.25a1 1 0 010-1.414z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.932 6.932a.45.45 0 01.636 0L7.5 8.864l1.932-1.932a.45.45 0 01.636.636l-2.25 2.25a.45.45 0 01-.636 0l-2.25-2.25a.45.45 0 010-.636z"
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
