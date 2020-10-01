import * as React from 'react';
import { IconProps } from './types';

export const TriangleRightIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 11L6 4L10.5 7.5L6 11Z" fill={color} />
    </svg>
  );
};

export default TriangleRightIcon;
