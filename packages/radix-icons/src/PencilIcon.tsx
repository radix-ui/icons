import * as React from 'react';
import { BaseIconProps } from './types';

interface PencilIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const PencilIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: PencilIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.854 1.146a.5.5 0 00-.708 0L3.715 8.578a1 1 0 00-.213.314L2.04 12.303a.5.5 0 00.657.657l3.411-1.463a1 1 0 00.314-.211l7.432-7.432a.5.5 0 000-.708l-2-2zm-7.432 8.14L11.5 2.206 12.793 3.5l-7.078 7.078-1.496.641-.438-.438.64-1.496z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`PencilIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PencilIcon;
