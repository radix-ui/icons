import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BorderIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 4a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm9 0H4v7h7V4z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderIcon;
