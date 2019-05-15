import * as React from 'react';
import { BaseIconProps } from './types';

interface ContainerIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ContainerIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ContainerIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path stroke={color} d="M5.5 2.5h4v10h-4z" />
        <path
          d="M14.5 5.5l-2 2 2 2M.5 9.5l2-2-2-2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `ContainerIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default ContainerIcon;
