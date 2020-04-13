import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const ChevronLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ChevronLeftIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9.3534 3.14636C9.54866 3.34162 9.54866 3.65821 9.3534 3.85347L5.70695 7.49992L9.3534 11.1464C9.54866 11.3416 9.54866 11.6582 9.3534 11.8535C9.15814 12.0487 8.84156 12.0487 8.64629 11.8535L4.64629 7.85347C4.45103 7.65821 4.45103 7.34162 4.64629 7.14636L8.64629 3.14636C8.84156 2.9511 9.15814 2.9511 9.3534 3.14636Z"
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
          d="M9.70692 2.79281C10.0974 3.18333 10.0974 3.8165 9.70692 4.20702L6.41403 7.49992L9.70692 10.7928C10.0974 11.1833 10.0974 11.8165 9.70692 12.207C9.3164 12.5975 8.68323 12.5975 8.29271 12.207L4.29271 8.20702C3.90219 7.8165 3.90219 7.18333 4.29271 6.79281L8.29271 2.79281C8.68323 2.40229 9.3164 2.40229 9.70692 2.79281Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M9.35337 3.14636C9.54863 3.34162 9.54863 3.65821 9.35337 3.85347L5.70692 7.49992L9.35337 11.1464C9.54863 11.3416 9.54863 11.6582 9.35337 11.8535C9.15811 12.0487 8.84153 12.0487 8.64626 11.8535L4.64626 7.85347C4.451 7.65821 4.451 7.34162 4.64626 7.14636L8.64626 3.14636C8.84153 2.9511 9.15811 2.9511 9.35337 3.14636Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronLeftIcon;
