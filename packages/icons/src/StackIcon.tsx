import * as React from 'react';
import { BaseIconProps } from './types';

interface StackIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const StackIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: StackIconProps) => {
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
          d="M19.5 16.5l-7 4-7-4M19.5 12.5l-7 4-7-4M12.5 12.5l7-4-7-4-7 4 7 4z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `StackIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default StackIcon;
