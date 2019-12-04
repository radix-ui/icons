import * as React from 'react';
import { BaseIconProps } from './types';

interface InfoIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const InfoIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: InfoIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 13a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-8a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5zm0-.875a.625.625 0 100-1.25.625.625 0 000 1.25z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M14 7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.5 13a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-8a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5zm0-.875a.625.625 0 100-1.25.625.625 0 000 1.25z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`InfoIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default InfoIcon;
