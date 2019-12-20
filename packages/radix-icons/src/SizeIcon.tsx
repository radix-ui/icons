import * as React from 'react';
import { BaseIconProps } from './types';

interface SizeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const SizeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SizeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.5 3.05a.45.45 0 01.45.45v4a.45.45 0 01-.9 0V4.586L4.586 11.05H7.5a.45.45 0 010 .9h-4a.45.45 0 01-.45-.45v-4a.45.45 0 11.9 0v2.914l6.464-6.464H7.5a.45.45 0 110-.9h4z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SizeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SizeIcon;
