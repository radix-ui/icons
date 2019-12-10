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
          d="M5.182 7.182l2.5-2.5.636.636L6.136 7.5l2.182 2.182-.636.636-2.5-2.5-.319-.318.319-.318z"
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
          d="M8.707 4.293a1 1 0 010 1.414L6.914 7.5l1.793 1.793a1 1 0 01-1.414 1.414l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.318 4.682a.45.45 0 010 .636L6.136 7.5l2.182 2.182a.45.45 0 01-.636.636l-2.5-2.5a.45.45 0 010-.636l2.5-2.5a.45.45 0 01.636 0z"
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
