import * as React from 'react';
import { BaseIconProps } from './types';

interface CrossIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CrossIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CrossIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.354 4.354a.5.5 0 00-.708-.708L7.5 6.793 4.354 3.646a.5.5 0 10-.708.708L6.793 7.5l-3.147 3.146a.5.5 0 00.708.708L7.5 8.207l3.146 3.147a.5.5 0 00.708-.708L8.207 7.5l3.147-3.146z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CrossIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CrossIcon;
