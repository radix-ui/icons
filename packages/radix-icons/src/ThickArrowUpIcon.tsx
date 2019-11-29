import * as React from 'react';
import { BaseIconProps } from './types';

interface ThickArrowUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ThickArrowUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ThickArrowUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 2a.5.5 0 01.407.21l5 7a.5.5 0 01-.407.79H10v2.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V10H2.5a.5.5 0 01-.407-.79l5-7A.5.5 0 017.5 2zM3.472 9H5.5a.5.5 0 01.5.5V12h3V9.5a.5.5 0 01.5-.5h2.028L7.5 3.36 3.472 9z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ThickArrowUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ThickArrowUpIcon;
