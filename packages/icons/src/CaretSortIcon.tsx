import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretSortIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const CaretSortIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: CaretSortIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10 10l-2.5 2.5L5 10M5 5l2.5-2.5L10 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `CaretSortIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CaretSortIcon;
