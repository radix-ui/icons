import * as React from 'react';
import { BaseIconProps } from './types';

interface DoubleArrowLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DoubleArrowLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DoubleArrowLeftIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.854 3.854a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L3.207 7.5l3.647-3.646zm6 0a.5.5 0 00-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L9.207 7.5l3.647-3.646z"
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
          d="M7.207 4.207a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L3.914 7.5l3.293-3.293zm6 0a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L9.914 7.5l3.293-3.293z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.854 3.854a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L3.207 7.5l3.647-3.646zm6 0a.5.5 0 00-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L9.207 7.5l3.647-3.646z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DoubleArrowLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DoubleArrowLeftIcon;
