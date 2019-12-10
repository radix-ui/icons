import * as React from 'react';
import { BaseIconProps } from './types';

interface AspectRatioIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const AspectRatioIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: AspectRatioIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.5 2A1.5 1.5 0 002 3.5v8A1.5 1.5 0 003.5 13h8a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0011.5 2h-8zM3 3.5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5V8h-1.5a.5.5 0 000 1H12v2.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5V9h1.5a.5.5 0 000-1H3V3.5zm3 5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z"
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
            d="M3.5 2.5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1h-8z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M3.5 2A1.5 1.5 0 002 3.5v8A1.5 1.5 0 003.5 13h8a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0011.5 2h-8zM3 3.5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5V8h-1.5a.5.5 0 000 1H12v2.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5V9h1.5a.5.5 0 000-1H3V3.5zm3 5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`AspectRatioIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default AspectRatioIcon;
