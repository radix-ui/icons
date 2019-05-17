import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretUpIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const CaretUpIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: CaretUpIconProps) => {
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
          d="M5 9l2.5-2.5L10 9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `CaretUpIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CaretUpIcon;
