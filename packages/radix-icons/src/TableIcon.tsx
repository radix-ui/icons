import * as React from 'react';
import { BaseIconProps } from './types';

interface TableIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TableIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TableIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8 2h4.5a.5.5 0 01.5.5V5H8V2zM7 5V2H2.5a.5.5 0 00-.5.5V5h5zM2 6v3h5V6H2zm6 0h5v3H8V6zm0 4h5v2.5a.5.5 0 01-.5.5H8v-3zm-6 2.5V10h5v3H2.5a.5.5 0 01-.5-.5zm-1-10A1.5 1.5 0 012.5 1h10A1.5 1.5 0 0114 2.5v10a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 12.5v-10z"
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
          d="M2.5 1A1.5 1.5 0 001 2.5v10A1.5 1.5 0 002.5 14h10a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0012.5 1h-10z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8 2h4.5a.5.5 0 01.5.5V5H8V2zM7 5V2H2.5a.5.5 0 00-.5.5V5h5zM2 6v3h5V6H2zm6 0h5v3H8V6zm0 4h5v2.5a.5.5 0 01-.5.5H8v-3zm-6 2.5V10h5v3H2.5a.5.5 0 01-.5-.5zm-1-10A1.5 1.5 0 012.5 1h10A1.5 1.5 0 0114 2.5v10a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 12.5v-10z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TableIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TableIcon;
