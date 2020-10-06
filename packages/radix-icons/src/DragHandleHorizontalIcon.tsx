import * as React from 'react';
import { IconProps } from './types';

export const DragHandleHorizontalIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M2.5 4.1C2.27909 4.1 2.1 4.27909 2.1 4.5C2.1 4.72091 2.27909 4.9 2.5 4.9H12.5C12.7209 4.9 12.9 4.72091 12.9 4.5C12.9 4.27909 12.7209 4.1 12.5 4.1H2.5ZM2.5 6.1C2.27909 6.1 2.1 6.27909 2.1 6.5C2.1 6.72091 2.27909 6.9 2.5 6.9H12.5C12.7209 6.9 12.9 6.72091 12.9 6.5C12.9 6.27909 12.7209 6.1 12.5 6.1H2.5ZM2.1 8.5C2.1 8.27909 2.27909 8.1 2.5 8.1H12.5C12.7209 8.1 12.9 8.27909 12.9 8.5C12.9 8.72091 12.7209 8.9 12.5 8.9H2.5C2.27909 8.9 2.1 8.72091 2.1 8.5ZM2.5 10.1C2.27909 10.1 2.1 10.2791 2.1 10.5C2.1 10.7209 2.27909 10.9 2.5 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default DragHandleHorizontalIcon;
