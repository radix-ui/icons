import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ArrowDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ArrowDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 2a.5.5 0 01.5.5v8.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 11.293V2.5a.5.5 0 01.5-.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowDownIcon;
