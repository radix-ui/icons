import * as React from 'react';
import { BaseIconProps } from './types';

interface DividerHorizontalIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const DividerHorizontalIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: DividerHorizontalIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z"
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
          d="M1.5 7.5C1.5 6.94772 1.94772 6.5 2.5 6.5H12.5C13.0523 6.5 13.5 6.94772 13.5 7.5C13.5 8.05228 13.0523 8.5 12.5 8.5H2.5C1.94772 8.5 1.5 8.05228 1.5 7.5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`DividerHorizontalIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DividerHorizontalIcon;
