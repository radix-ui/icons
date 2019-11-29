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
          d="M2 2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v2a.5.5 0 01-1 0V3H8v9h2.5a.5.5 0 010 1h-6a.5.5 0 010-1H7V3H3v1.5a.5.5 0 01-1 0v-2z"
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
