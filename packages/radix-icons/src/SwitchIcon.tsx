import * as React from 'react';
import { BaseIconProps } from './types';

interface SwitchIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const SwitchIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SwitchIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M10.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm-2.829 7A4.491 4.491 0 016 7.5c0-1.414.652-2.675 1.671-3.5H4.5a3.5 3.5 0 100 7h3.171zM0 7.5A4.5 4.5 0 014.5 3h6a4.5 4.5 0 110 9h-6A4.5 4.5 0 010 7.5z"
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
          <path d="M0 7.5A4.5 4.5 0 014.5 3h6a4.5 4.5 0 110 9h-6A4.5 4.5 0 010 7.5z" fill={color} />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M10.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm-2.829 7A4.491 4.491 0 016 7.5c0-1.414.652-2.675 1.671-3.5H4.5a3.5 3.5 0 100 7h3.171zM0 7.5A4.5 4.5 0 014.5 3h6a4.5 4.5 0 110 9h-6A4.5 4.5 0 010 7.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SwitchIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SwitchIcon;
