import * as React from 'react';
import { BaseIconProps } from './types';

interface TriangleLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const TriangleLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: TriangleLeftIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9 4L9 11L4.5 7.5L9 4Z" fill={color} />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9 4L9 11L4.5 7.5L9 4Z" fill={color} opacity=".2" />
        <path
          d="M9.43935 3.10169C9.78245 3.2695 10 3.61807 10 4.00001L10 11C10 11.3819 9.78245 11.7305 9.43935 11.8983C9.09625 12.0661 8.68754 12.0238 8.38606 11.7894L3.88606 8.28936C3.64247 8.0999 3.5 7.8086 3.5 7.50001C3.5 7.19142 3.64247 6.90011 3.88606 6.71065L8.38606 3.21066C8.68754 2.97617 9.09625 2.93389 9.43935 3.10169ZM9 5.26687L9 4.00001L8 4.77779L5.31441 6.86658L4.5 7.50001L5.31441 8.13344L8 10.2222L9 11L9 9.73315L9 5.26687Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TriangleLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TriangleLeftIcon;
