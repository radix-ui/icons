import * as React from 'react';
import { BaseIconProps } from './types';

interface TableIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const TableIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TableIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x="1.5" y="1.5" width="12" height="12" rx=".5" stroke={color} />
        <path d="M7.5 2v11M13 9.5H2M13 5.5H2" stroke={color} />
      </svg>
    );
  }

  console.error(
    `TableIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default TableIcon;
