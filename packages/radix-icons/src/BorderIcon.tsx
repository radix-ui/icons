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
          d="M2.25 4c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7A1.75 1.75 0 0111 12.75H4A1.75 1.75 0 012.25 11V4zM4 3.75a.25.25 0 00-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 00.25-.25V4a.25.25 0 00-.25-.25H4z"
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
