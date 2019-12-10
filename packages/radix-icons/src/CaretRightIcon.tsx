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
          d="M8.864 7.5L6.682 5.318l.636-.636 2.5 2.5.319.318-.319.318-2.5 2.5-.636-.636L8.864 7.5z"
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
          d="M6.293 4.293a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5a1 1 0 11-1.414-1.414L8.086 7.5 6.293 5.707a1 1 0 010-1.414z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M6.682 4.682a.45.45 0 01.636 0l2.5 2.5a.45.45 0 010 .636l-2.5 2.5a.45.45 0 11-.636-.636L8.864 7.5 6.682 5.318a.45.45 0 010-.636z"
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
