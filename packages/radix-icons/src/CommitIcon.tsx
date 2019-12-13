import * as React from 'react';
import { BaseIconProps } from './types';

interface CommitIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CommitIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CommitIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9.95 7.5a2.45 2.45 0 11-4.9 0 2.45 2.45 0 014.9 0zm.913.5a3.4 3.4 0 01-6.726 0H.5a.5.5 0 010-1h3.637a3.4 3.4 0 016.726 0H14.5a.5.5 0 010 1h-3.637z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CommitIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CommitIcon;
