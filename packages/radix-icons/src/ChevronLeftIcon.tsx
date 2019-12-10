import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ChevronLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ChevronLeftIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9.353 3.146a.5.5 0 010 .707L5.707 7.5l3.646 3.646a.5.5 0 11-.707.707l-4-4a.5.5 0 010-.707l4-4a.5.5 0 01.707 0z"
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
          d="M9.707 2.793a1 1 0 010 1.414L6.414 7.5l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M9.353 3.146a.5.5 0 010 .707L5.707 7.5l3.646 3.646a.5.5 0 11-.707.707l-4-4a.5.5 0 010-.707l4-4a.5.5 0 01.707 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronLeftIcon;
