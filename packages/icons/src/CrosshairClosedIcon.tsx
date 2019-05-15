import * as React from 'react';
import { BaseIconProps } from './types';

interface CrosshairClosedIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CrosshairClosedIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CrosshairClosedIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="7.5" cy="7.5" r="4" stroke={color} />
        <path d="M.5 7.5h14M7.5.5v14" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(
    `CrosshairClosedIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CrosshairClosedIcon;
