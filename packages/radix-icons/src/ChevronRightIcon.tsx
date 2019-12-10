import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ChevronRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ChevronRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.647 3.146a.5.5 0 01.707 0l4 4a.5.5 0 010 .707l-4 4a.5.5 0 01-.707-.707L9.293 7.5 5.647 3.853a.5.5 0 010-.707z"
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
          d="M5.293 2.793a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L8.586 7.5 5.293 4.207a1 1 0 010-1.414z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5.647 3.146a.5.5 0 01.707 0l4 4a.5.5 0 010 .707l-4 4a.5.5 0 01-.707-.707L9.293 7.5 5.647 3.853a.5.5 0 010-.707z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronRightIcon;
