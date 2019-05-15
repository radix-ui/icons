import * as React from 'react';
import { BaseIconProps } from './types';

interface TextCasingLowercaseIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const TextCasingLowercaseIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: TextCasingLowercaseIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M20.5 18v-8M17 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM11.5 18v-8M8 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(
    `TextCasingLowercaseIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default TextCasingLowercaseIcon;
