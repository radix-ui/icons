import * as React from 'react';
import { BaseIconProps } from './types';

interface DragIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const DragIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DragIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM12.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM15.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
          fill={color}
        />
      </svg>
    );
  }

  console.error(
    `DragIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default DragIcon;
