import * as React from 'react';
import { BaseIconProps } from './types';

interface EnvelopeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const EnvelopeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: EnvelopeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.5 2A1.5 1.5 0 001 3.5v7A1.5 1.5 0 002.5 12h10a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0012.5 2h-10zm-.197 1.04A.498.498 0 012.5 3h10c.07 0 .136.014.197.04L7.5 6.937 2.303 3.04zM2 3.937V10.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V3.937L7.77 7.86a.45.45 0 01-.54 0L2 3.937z"
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
        <g opacity=".2" fill={color}>
          <path d="M0 0h15v15H0V0z" />
          <path
            d="M2.5 2.5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1h-10z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <path
          d="M2.5 2A1.5 1.5 0 001 3.5v7A1.5 1.5 0 002.5 12h10a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0012.5 2h-10zm-.197 1.04A.498.498 0 012.5 3h10c.07 0 .136.014.197.04L7.5 6.937 2.303 3.04zM2 3.937V10.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V3.937L7.77 7.86a.45.45 0 01-.54 0L2 3.937z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M7.5 7.5L2 3.375l.5-.875h10l.5.875L7.5 7.5z" fill={color} />
      </svg>
    );
  }

  console.error(`EnvelopeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default EnvelopeIcon;
