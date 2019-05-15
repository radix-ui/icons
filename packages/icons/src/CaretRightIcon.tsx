import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CaretRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretRightIconProps) => {
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
          d="M6 5l2.5 2.5L6 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `CaretRightIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CaretRightIcon;
