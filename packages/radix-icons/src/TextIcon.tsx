import * as React from 'react';
import { BaseIconProps } from './types';

interface TextIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const TextIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TextIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.5 2a.5.5 0 00-.5.5V4a.5.5 0 001 0V3h3v8H6a.5.5 0 000 1h3a.5.5 0 000-1H8V3h3v1a.5.5 0 001 0V2.5a.5.5 0 00-.5-.5h-8z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TextIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TextIcon;
