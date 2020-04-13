import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const TriangleDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: TriangleDownIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 6H11L7.5 10.5L4 6Z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 6H11L7.5 10.5L4 6Z" fill={color} opacity=".2" />
        <path
          d="M3.10169 5.56065C3.2695 5.21755 3.61807 5 4.00001 5H11C11.3819 5 11.7305 5.21755 11.8983 5.56065C12.0661 5.90375 12.0238 6.31246 11.7894 6.61394L8.28936 11.1139C8.0999 11.3575 7.8086 11.5 7.50001 11.5C7.19142 11.5 6.90011 11.3575 6.71066 11.1139L3.21066 6.61394C2.97617 6.31246 2.93389 5.90375 3.10169 5.56065ZM5.26687 6H4.00001L4.77779 7L6.86658 9.68559L7.50001 10.5L8.13344 9.68559L10.2222 7L11 6H9.73315H5.26687Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TriangleDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleDownIcon;
