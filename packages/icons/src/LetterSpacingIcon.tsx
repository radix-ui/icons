import * as React from 'react';
import { BaseIconProps } from './types';

interface LetterSpacingIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const LetterSpacingIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LetterSpacingIconProps) => {
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
          d="M7.5 20.5l-3-3 3-3M17.5 20.5l3-3-3-3M11.5 11.5l-3-7-3 7M19.5 4.5l-3 7-3-7M6.5 9.5h4M4.5 17.5h16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `LetterSpacingIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default LetterSpacingIcon;
