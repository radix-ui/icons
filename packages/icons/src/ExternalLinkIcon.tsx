import * as React from 'react';
import { BaseIconProps } from './types';

interface ExternalLinkIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ExternalLinkIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ExternalLinkIconProps) => {
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
          d="M14.5 4.5h6v6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 13.5l9-9M18.5 14.5V20a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h5.5"
          stroke={color}
          strokeLinecap="round"
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
          d="M9.5 2.5h3v3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 8.5l6-6M10.5 9.071V12a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h2.929"
          stroke={color}
          strokeLinecap="round"
        />
      </svg>
    );
  }

  console.error(
    `ExternalLinkIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default ExternalLinkIcon;
