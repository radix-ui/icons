import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderStyleIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BorderStyleIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderStyleIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0 4a.5.5 0 111 0 .5.5 0 01-1 0zm2 0a.5.5 0 111 0 .5.5 0 01-1 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1zm1.5.5a.5.5 0 111 0 .5.5 0 01-1 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1zm1.5.5a.5.5 0 111 0 .5.5 0 01-1 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1zm-7-4a.5.5 0 000 1h2a.5.5 0 000-1h-2zm4.5.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderStyleIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderStyleIcon;
