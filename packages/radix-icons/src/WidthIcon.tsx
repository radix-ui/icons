import * as React from 'react';
import { BaseIconProps } from './types';

interface WidthIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const WidthIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: WidthIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.818 4.682a.45.45 0 010 .636L3.086 7.05h8.828l-1.732-1.732a.45.45 0 01.636-.636l2.5 2.5a.45.45 0 010 .636l-2.5 2.5a.45.45 0 01-.636-.636l1.732-1.732H3.086l1.732 1.732a.45.45 0 11-.636.636l-2.5-2.5a.45.45 0 010-.636l2.5-2.5a.45.45 0 01.636 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`WidthIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default WidthIcon;
