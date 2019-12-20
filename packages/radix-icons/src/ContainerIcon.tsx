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
        <path
          d="M5 2.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-10zM6 3v9h3V3H6zm8.854 2.146a.5.5 0 010 .708L13.207 7.5l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.708 0zm-14.708 4a.5.5 0 10.708.708l2-2a.5.5 0 000-.708l-2-2a.5.5 0 10-.708.708L1.793 7.5.146 9.146z"
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
          d="M5.5 2.5h4v10h-4v-10zm9.354 2.646a.5.5 0 010 .708L13.207 7.5l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.708 0zm-14.708 4a.5.5 0 10.708.708l2-2a.5.5 0 000-.708l-2-2a.5.5 0 10-.708.708L1.793 7.5.146 9.146z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5 2.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-10zM9 3H6v9h3V3zm5.854 2.146a.5.5 0 010 .708L13.207 7.5l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.708 0zm-14.708 4a.5.5 0 10.708.708l2-2a.5.5 0 000-.708l-2-2a.5.5 0 10-.708.708L1.793 7.5.146 9.146z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ContainerIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ContainerIcon;
