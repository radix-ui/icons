import * as React from 'react';
import { BaseIconProps } from './types';

interface ResetIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ResetIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ResetIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3 2.5C3 2.22386 2.77614 2 2.5 2C2.22386 2 2 2.22386 2 2.5V5.5C2 5.77614 2.22386 6 2.5 6H5.5C5.77614 6 6 5.77614 6 5.5C6 5.22386 5.77614 5 5.5 5H3.67715C4.78626 3.84203 5.69376 3 7.5 3C10.2387 3 12 5.2396 12 7.5C12 9.7604 10.2387 12 7.5 12C7.22386 12 7 12.2239 7 12.5C7 12.7761 7.22386 13 7.5 13C10.8613 13 13 10.2396 13 7.5C13 4.7604 10.8613 2 7.5 2C5.28796 2 4.11544 3.09467 3 4.26033V2.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ResetIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ResetIcon;
