import * as React from 'react';
import { BaseIconProps } from './types';

interface CheckIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CheckIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CheckIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 01-.943.12l-2.75-2.5a.625.625 0 01.84-.925l2.208 2.007 3.849-5.886a.625.625 0 01.865-.181z"
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
          d="M11.809 3.204a1.25 1.25 0 01.362 1.73l-4.25 6.5a1.25 1.25 0 01-1.887.24l-2.75-2.5a1.25 1.25 0 111.682-1.849L6.63 8.839l3.448-5.273a1.25 1.25 0 011.73-.362z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 01-.944.12l-2.75-2.5a.625.625 0 01.841-.925l2.208 2.007 3.849-5.886a.625.625 0 01.865-.181z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CheckIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CheckIcon;