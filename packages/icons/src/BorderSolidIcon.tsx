import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderSolidIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const BorderSolidIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BorderSolidIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M23 11H2v3h21v-3z" fill={color} />
      </svg>
    );
  }

  console.error(
    `BorderSolidIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default BorderSolidIcon;
