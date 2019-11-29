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
          d="M3.5 8H0V7h3.5a.5.5 0 010 1zM5 7.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm6.5-.5a.5.5 0 000 1H15V7h-3.5z"
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
