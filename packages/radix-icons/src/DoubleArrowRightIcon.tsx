import * as React from 'react';
import { BaseIconProps } from './types';

interface DoubleArrowRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DoubleArrowRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DoubleArrowRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.146 11.146a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 10-.708.708L5.793 7.5l-3.647 3.646zm6 0a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 10-.708.708L11.793 7.5l-3.647 3.646z"
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
          d="M1.793 10.793a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L5.086 7.5l-3.293 3.293zm6 0a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L11.086 7.5l-3.293 3.293z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M2.146 11.146a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 10-.708.708L5.793 7.5l-3.647 3.646zm6 0a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 10-.708.708L11.793 7.5l-3.647 3.646z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DoubleArrowRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DoubleArrowRightIcon;
