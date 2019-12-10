import * as React from 'react';
import { BaseIconProps } from './types';

interface ButtonIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ButtonIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ButtonIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3 5h9a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zM1 6a2 2 0 012-2h9a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2V6zm3.5 1a.5.5 0 000 1h6a.5.5 0 000-1h-6z"
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
            d="M3 4a2 2 0 00-2 2v3a2 2 0 002 2h9a2 2 0 002-2V6a2 2 0 00-2-2H3z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M3 5h9a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zM1 6a2 2 0 012-2h9a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2V6zm3.5 1a.5.5 0 000 1h6a.5.5 0 000-1h-6z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ButtonIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ButtonIcon;
