import * as React from 'react';
import { BaseIconProps } from './types';

interface TextAlignJustifyIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const TextAlignJustifyIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: TextAlignJustifyIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 16.5h17M4 12.5h17M4 8.5h17" stroke={color} />
      </svg>
    );
  }

  console.error(`TextAlignJustifyIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TextAlignJustifyIcon;
