import * as React from 'react';
import { BaseIconProps } from './types';

interface CrosshairIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CrosshairIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CrosshairIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.127 7.5a6.373 6.373 0 1112.746 0 6.373 6.373 0 01-12.746 0zM2.1 7A5.424 5.424 0 017 2.1v2.4a.5.5 0 001 0V2.1A5.424 5.424 0 0112.9 7h-2.4a.5.5 0 000 1h2.4A5.425 5.425 0 018 12.9v-2.4a.5.5 0 00-1 0v2.4A5.424 5.424 0 012.1 8h2.4a.5.5 0 000-1H2.1z"
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
            d="M7.5 1.5c.119 0 .228.041.313.11a5.898 5.898 0 015.577 5.576.498.498 0 010 .628 5.898 5.898 0 01-5.576 5.575.498.498 0 01-.628 0A5.898 5.898 0 011.61 7.814a.498.498 0 010-.626A5.898 5.898 0 017.187 1.61.498.498 0 017.5 1.5z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M1.127 7.5a6.373 6.373 0 1112.746 0 6.373 6.373 0 01-12.746 0zM2.1 7A5.424 5.424 0 017 2.1v2.4a.5.5 0 001 0V2.1A5.424 5.424 0 0112.9 7h-2.4a.5.5 0 000 1h2.4A5.425 5.425 0 018 12.9v-2.4a.5.5 0 00-1 0v2.4A5.424 5.424 0 012.1 8h2.4a.5.5 0 100-1H2.1z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CrosshairIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CrosshairIcon;
