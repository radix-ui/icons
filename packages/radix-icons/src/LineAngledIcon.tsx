import * as React from 'react';
import { BaseIconProps } from './types';

interface LineAngledIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const LineAngledIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LineAngledIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.146 20.146a.5.5 0 00.708.708l-.708-.708zM20.854 4.854a.5.5 0 00-.708-.708l.708.708zm-16 16l16-16-.708-.708-16 16 .708.708z"
          fill={color}
        />
      </svg>
    );
  }

  console.error(`LineAngledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LineAngledIcon;
