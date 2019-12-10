import * as React from 'react';
import { BaseIconProps } from './types';

interface ContainerIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ContainerIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ContainerIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0)">
          <path
            d="M9 3H6v9h3V3zM6 2H5v11h5V2H6zm8.854 3.146a.5.5 0 010 .708L13.207 7.5l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.708 0zm-14.708 4a.5.5 0 10.708.708l2-2a.5.5 0 000-.708l-2-2a.5.5 0 10-.708.708L1.793 7.5.146 9.146z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0" />
        </defs>
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g opacity=".2" clipPath="url(#clip0)">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path
            d="M5 2h5v11H5V2zm9.854 3.146a.5.5 0 010 .708L13.207 7.5l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.708 0zm-14.708 4a.5.5 0 10.708.708l2-2a.5.5 0 000-.708l-2-2a.5.5 0 10-.708.708L1.793 7.5.146 9.146z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <g clipPath="url(#clip1)">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path
            d="M9 3H6v9h3V3zM6 2H5v11h5V2H6zm8.854 3.146a.5.5 0 010 .708L13.207 7.5l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.708 0zm-14.708 4a.5.5 0 10.708.708l2-2a.5.5 0 000-.708l-2-2a.5.5 0 10-.708.708L1.793 7.5.146 9.146z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M0 0h15v15H0V0z" fill={color} />
          </clipPath>
          <clipPath id="clip1">
            <path d="M0 0h15v15H0V0z" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`ContainerIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ContainerIcon;
