import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CaretUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.932 8.068a.45.45 0 010-.636l2.25-2.25a.45.45 0 01.636 0l2.25 2.25a.45.45 0 01-.636.636L7.5 6.136 5.568 8.068a.45.45 0 01-.636 0z"
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
          d="M4.543 8.457a1 1 0 010-1.414l2.25-2.25a1 1 0 011.414 0l2.25 2.25a1 1 0 01-1.414 1.414L7.5 6.914 5.957 8.457a1 1 0 01-1.414 0z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.932 8.068a.45.45 0 010-.636l2.25-2.25a.45.45 0 01.636 0l2.25 2.25a.45.45 0 01-.636.636L7.5 6.136 5.568 8.068a.45.45 0 01-.636 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretUpIcon;
