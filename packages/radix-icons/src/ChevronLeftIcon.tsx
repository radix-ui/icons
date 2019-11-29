import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ChevronLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ChevronLeftIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9.354 3.146a.5.5 0 010 .708L5.707 7.5l3.647 3.646a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronLeftIcon;
