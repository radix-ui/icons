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
          d="M7.5 3.375a.875.875 0 100-1.75.875.875 0 000 1.75zM7.5 5H5v1h2v5H5v1H7.5v-.5.5H10v-1H8V5h-.5z"
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
        <g opacity=".2">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path
            d="M7.5 3.375a.875.875 0 100-1.75.875.875 0 000 1.75zM7.5 5H5v1h2v5H5v1H7.5v-.5.5H10v-1H8V5h-.5z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M7.5 3.375a.875.875 0 100-1.75.875.875 0 000 1.75zM7.5 5H5v1h2v5H5v1H7.5v-.5.5H10v-1H8V5h-.5z"
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
