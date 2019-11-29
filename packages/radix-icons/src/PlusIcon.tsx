import * as React from 'react';
import { BaseIconProps } from './types';

interface PlusIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const PlusIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: PlusIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8 7V3H7v4H3v1h4v4h1V8h4V7H8z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`PlusIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PlusIcon;
