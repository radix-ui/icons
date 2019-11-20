import * as React from 'react';
import { BaseIconProps } from './types';

interface WarningIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const WarningIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: WarningIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12.5 5.5l-8 14h16l-8-14zM12.5 13.5v-3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.5 17a.5.5 0 100-1 .5.5 0 000 1z" fill={color} />
      </svg>
    );
  }

  console.error(`WarningIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default WarningIcon;
