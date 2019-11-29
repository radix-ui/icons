import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderDottedIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BorderDottedIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderDottedIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.5 6.625a.875.875 0 100 1.75.875.875 0 000-1.75zm4 0a.875.875 0 100 1.75.875.875 0 000-1.75zm4 0a.875.875 0 100 1.75.875.875 0 000-1.75zm3.125.875a.875.875 0 111.75 0 .875.875 0 01-1.75 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderDottedIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderDottedIcon;
