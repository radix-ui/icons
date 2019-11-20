import * as React from 'react';
import { BaseIconProps } from './types';

interface VisibleIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const VisibleIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: VisibleIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12.5 20.5c-5.143 0-9.429-3.2-12-8 2.571-4.8 6.857-8 12-8s9.429 3.2 12 8c-2.571 4.8-6.857 8-12 8z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.5 16.5a4 4 0 100-8 4 4 0 000 8z" stroke={color} />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 12.5c-3 0-5.5-2-7-5 1.5-3 4-5 7-5s5.5 2 7 5c-1.5 3-4 5-7 5z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="7.5" r="2" stroke={color} />
      </svg>
    );
  }

  console.error(`VisibleIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default VisibleIcon;
