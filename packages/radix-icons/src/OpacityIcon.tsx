import * as React from 'react';
import { BaseIconProps } from './types';

interface OpacityIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const OpacityIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: OpacityIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 1.5C4.5 4.25 3 6.5 3 9a4.5 4.5 0 109 0c0-2.5-1.5-4.75-4.5-7.5zM11 9c0-1.888-1.027-3.728-3.5-6.126C5.027 5.272 4 7.112 4 9a3.5 3.5 0 107 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`OpacityIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default OpacityIcon;
