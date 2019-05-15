import * as React from 'react';
import { BaseIconProps } from './types';

interface TextStyleItalicIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const TextStyleItalicIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: TextStyleItalicIconProps) => {
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
          d="M17.5 7.5h-6M13.5 17.5h-6M14.5 7.5l-4 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `TextStyleItalicIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default TextStyleItalicIcon;
