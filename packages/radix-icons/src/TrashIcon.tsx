import * as React from 'react';
import { BaseIconProps } from './types';

interface TrashIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TrashIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TrashIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zM3 4.5a.5.5 0 01.5-.5h8a.5.5 0 010 1H11v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5h-.5a.5.5 0 01-.5-.5zM5 5h5v7H5V5z"
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
            d="M5.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zM3 4.5a.5.5 0 01.5-.5h8a.5.5 0 010 1H11v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5h-.5a.5.5 0 01-.5-.5z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M5.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zM3 4.5a.5.5 0 01.5-.5h8a.5.5 0 010 1H11v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5h-.5a.5.5 0 01-.5-.5zM5 5h5v7H5V5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TrashIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TrashIcon;
