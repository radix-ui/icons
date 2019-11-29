import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretSortIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CaretSortIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretSortIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.318 6.318L7.5 4.136l2.182 2.182.636-.636-2.5-2.5-.318-.318-.318.318-2.5 2.5.636.636zm2.5 5.5l2.5-2.5-.636-.636L7.5 10.864 5.318 8.682l-.636.636 2.5 2.5.318.318.318-.318z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretSortIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretSortIcon;
