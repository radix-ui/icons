import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const ArrowDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ArrowDownIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
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
          d="M7.5 1.5C8.05229 1.5 8.5 1.94772 8.5 2.5L8.5 10.0858L10.7929 7.79289C11.1834 7.40237 11.8166 7.40237 12.2071 7.79289C12.5976 8.18342 12.5976 8.81658 12.2071 9.20711L8.20711 13.2071C8.01957 13.3946 7.76522 13.5 7.5 13.5C7.23478 13.5 6.98043 13.3946 6.79289 13.2071L2.79289 9.20711C2.40237 8.81658 2.40237 8.18342 2.79289 7.79289C3.18342 7.40237 3.81658 7.40237 4.20711 7.79289L6.5 10.0858L6.5 2.5C6.5 1.94772 6.94772 1.5 7.5 1.5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowDownIcon;
