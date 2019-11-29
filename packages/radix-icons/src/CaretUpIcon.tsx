import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CaretUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 6.136L5.318 8.318l-.636-.636 2.5-2.5.318-.318.318.318 2.5 2.5-.636.636L7.5 6.136z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretUpIcon;
