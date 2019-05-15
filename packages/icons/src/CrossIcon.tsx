import * as React from 'react';
import { BaseIconProps } from './types';

interface CrossIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const CrossIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CrossIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M5.5 19.5l14-14M19.5 19.5l-14-14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2.5 12.5l10-10M12.5 12.5l-10-10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `CrossIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CrossIcon;
