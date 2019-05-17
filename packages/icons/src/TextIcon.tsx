import * as React from 'react';
import { BaseIconProps } from './types';

interface TextIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const TextIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: TextIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12.5 4.5v-2h-10v2M4.5 12.5h6M7.5 12.5v-10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `TextIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default TextIcon;
