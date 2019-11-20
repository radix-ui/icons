import * as React from 'react';
import { BaseIconProps } from './types';

interface TextCasingCapitalizeIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const TextCasingCapitalizeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: TextCasingCapitalizeIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M5.5 14.5h5M20.5 18v-8M17 17.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke={color} />
        <path
          d="M4.5 17.5L8 7.5l3.5 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`TextCasingCapitalizeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TextCasingCapitalizeIcon;
