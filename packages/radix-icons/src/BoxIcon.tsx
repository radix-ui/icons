import * as React from 'react';
import { BaseIconProps } from './types';

interface BoxIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BoxIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BoxIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 3a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm10 0H3v9h9V3z"
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
            d="M12 2.5H3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5z"
            fill={color}
          />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M2 3a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm10 0H3v9h9V3z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BoxIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BoxIcon;
