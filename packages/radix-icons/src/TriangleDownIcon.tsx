import * as React from 'react';
import { IconProps } from './types';

export const TriangleDownIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 6H11L7.5 10.5L4 6Z" fill={color} />
    </svg>
  );
};

export default TriangleDownIcon;
