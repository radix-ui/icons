import * as React from 'react';
import { BaseIconProps } from './types';

interface DoubleArrowUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DoubleArrowUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DoubleArrowUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.146 6.854a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 10.708.708L7.5 3.207l3.646 3.647zm0 6a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 00.708.708L7.5 9.207l3.646 3.647z"
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
          d="M10.793 7.207a1 1 0 101.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L7.5 3.914l3.293 3.293zm0 6a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414L7.5 9.914l3.293 3.293z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.146 6.854a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 10.708.708L7.5 3.207l3.646 3.647zm0 6a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 00.708.708L7.5 9.207l3.646 3.647z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DoubleArrowUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DoubleArrowUpIcon;
