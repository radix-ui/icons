import * as React from 'react';
import { BaseIconProps } from './types';

interface TextCasingUppercaseIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const TextCasingUppercaseIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: TextCasingUppercaseIconProps) => {
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
          d="M13.5 17.5l3.5-10 3.5 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14.5 14.5h5" stroke={color} />
        <path
          d="M4.5 17.5L8 7.5l3.5 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5.5 14.5h5" stroke={color} />
      </svg>
    );
  }

  console.error(
    `TextCasingUppercaseIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default TextCasingUppercaseIcon;
