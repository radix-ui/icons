import * as React from 'react';
import { BaseIconProps } from './types';

interface ClockIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ClockIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ClockIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.5 20.5a8 8 0 100-16 8 8 0 000 16z" stroke={color} />
        <path d="M14.5 14.5l-2-2v-5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="7.5" cy="7.5" r="6" stroke={color} />
        <path
          d="M8 4.5a.5.5 0 00-1 0h1zm-.5 3H7a.5.5 0 00.146.354L7.5 7.5zm1.646 2.354a.5.5 0 00.708-.708l-.708.708zM7 4.5v3h1v-3H7zm.146 3.354l2 2 .708-.708-2-2-.708.708z"
          fill={color}
        />
      </svg>
    );
  }

  console.error(`ClockIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ClockIcon;
