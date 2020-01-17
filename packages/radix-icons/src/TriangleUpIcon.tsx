import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TriangleUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TriangleUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 9H11L7.5 4.5L4 9Z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 9H11L7.5 4.5L4 9Z" fill={color} opacity=".2" />
        <path
          d="M3.10169 9.43935C3.2695 9.78245 3.61807 10 4.00001 10H11C11.3819 10 11.7305 9.78245 11.8983 9.43935C12.0661 9.09625 12.0238 8.68754 11.7894 8.38606L8.28936 3.88606C8.0999 3.64247 7.8086 3.5 7.50001 3.5C7.19142 3.5 6.90011 3.64247 6.71066 3.88606L3.21066 8.38606C2.97617 8.68754 2.93389 9.09625 3.10169 9.43935ZM5.26687 9H4.00001L4.77779 8L6.86658 5.31441L7.50001 4.5L8.13344 5.31441L10.2222 8L11 9H9.73315H5.26687Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TriangleUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleUpIcon;
