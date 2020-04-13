import * as React from 'react';
import { BaseIconProps } from './types';

interface DotFilledIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const DotFilledIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: DotFilledIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
          fill={color}
        />
      </svg>
    );
  }

  console.error(`DotFilledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default DotFilledIcon;
