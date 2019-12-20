import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderDashedIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BorderDashedIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderDashedIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M0 7.5A.5.5 0 01.5 7H3a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zm5.75 0a.5.5 0 01.5-.5h2.5a.5.5 0 010 1h-2.5a.5.5 0 01-.5-.5zM12 7a.5.5 0 000 1h2.5a.5.5 0 000-1H12z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderDashedIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderDashedIcon;
