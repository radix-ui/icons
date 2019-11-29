import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ArrowLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ArrowLeftIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.854 3.146a.5.5 0 010 .708L3.707 7H12.5a.5.5 0 010 1H3.707l3.147 3.146a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowLeftIcon;
