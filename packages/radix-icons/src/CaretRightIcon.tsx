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
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.864 7.5L6.682 5.318l.636-.636 2.5 2.5.319.318-.319.318-2.5 2.5-.636-.636L8.864 7.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretRightIcon;
