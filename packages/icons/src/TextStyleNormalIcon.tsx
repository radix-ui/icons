import * as React from 'react';
import { BaseIconProps } from './types';

interface TextStyleNormalIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const TextStyleNormalIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: TextStyleNormalIconProps) => {
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
          d="M15.5 7.5h-6M15.5 17.5h-6M12.5 7.5v10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `TextStyleNormalIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default TextStyleNormalIcon;
