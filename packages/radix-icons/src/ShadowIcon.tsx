import * as React from 'react';
import { BaseIconProps } from './types';

interface ShadowIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ShadowIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ShadowIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 1.127a6.373 6.373 0 100 12.746 6.373 6.373 0 000-12.746zM2.077 7.5a5.423 5.423 0 1110.846 0 5.423 5.423 0 01-10.846 0zM7.5 3.1a.4.4 0 100 .8h1.75a.4.4 0 000-.8H7.5zm0 2a.4.4 0 100 .8h3a.4.4 0 000-.8h-3zm0 2a.4.4 0 100 .8h4a.4.4 0 000-.8h-4zm0 2a.4.4 0 100 .8h3a.4.4 0 000-.8h-3zm0 2a.4.4 0 000 .8h1.75a.4.4 0 000-.8H7.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ShadowIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ShadowIcon;
