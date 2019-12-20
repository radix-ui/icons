import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CaretRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.932 4.932a.45.45 0 01.636 0l2.25 2.25a.45.45 0 010 .636l-2.25 2.25a.45.45 0 11-.636-.636L8.864 7.5 6.932 5.568a.45.45 0 010-.636z"
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
          d="M6.543 4.543a1 1 0 011.414 0l2.25 2.25a1 1 0 010 1.414l-2.25 2.25a1 1 0 11-1.414-1.414L8.086 7.5 6.543 5.957a1 1 0 010-1.414z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.932 4.932a.45.45 0 01.636 0l2.25 2.25a.45.45 0 010 .636l-2.25 2.25a.45.45 0 11-.636-.636L8.864 7.5 6.932 5.568a.45.45 0 010-.636z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretRightIcon;
