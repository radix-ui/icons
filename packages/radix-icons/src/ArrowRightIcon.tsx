import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ArrowRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ArrowRightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8.146 3.146a.5.5 0 01.708 0l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L11.293 8H2.5a.5.5 0 010-1h8.793L8.146 3.854a.5.5 0 010-.708z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowRightIcon;
