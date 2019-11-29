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
          d="M4.783 4.717a.4.4 0 010 .566L2.966 7.1h9.068l-1.817-1.817a.4.4 0 11.566-.566l2.5 2.5a.4.4 0 010 .566l-2.5 2.5a.4.4 0 11-.566-.566L12.034 7.9H2.966l1.817 1.817a.4.4 0 01-.566.566l-2.5-2.5a.4.4 0 010-.566l2.5-2.5a.4.4 0 01.566 0z"
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
