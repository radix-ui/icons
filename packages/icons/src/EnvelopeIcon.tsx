import * as React from 'react';
import { BaseIconProps } from './types';

interface EnvelopeIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const EnvelopeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: EnvelopeIconProps) => {
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
          d="M5 8l7.5 5.5L20 8M5 17l5.5-4.5M20 17l-5.5-4.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 8v9a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `EnvelopeIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default EnvelopeIcon;
