import * as React from 'react';
import { BaseIconProps } from './types';

interface ElementTagIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const ElementTagIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ElementTagIconProps) => {
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
          d="M6.5 8.5l-4 4 4 4M18.5 8.5l4 4-4 4M9.5 20.5l6-16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `ElementTagIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default ElementTagIcon;
