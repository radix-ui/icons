import * as React from 'react';
import { IconProps } from './types';

export const TriangleUpIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 9H11L7.5 4.5L4 9Z" fill={color} />
    </svg>
  );
};

export default TriangleUpIcon;
