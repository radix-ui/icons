import * as React from 'react';
import { BaseIconProps } from './types';

interface CrossCircledIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const CrossCircledIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CrossCircledIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12.5 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke={color} />
        <path
          d="M9.5 15.5l6-6M15.5 15.5l-6-6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `CrossCircledIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CrossCircledIcon;
