import * as React from 'react';
import { BaseIconProps } from './types';

interface LayoutSectionsHeaderIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const LayoutSectionsHeaderIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: LayoutSectionsHeaderIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M19 6.5H6A1.5 1.5 0 004.5 8v9A1.5 1.5 0 006 18.5h13a1.5 1.5 0 001.5-1.5V8A1.5 1.5 0 0019 6.5zM12.5 7v5M5 12.5h15.5"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(`LayoutSectionsHeaderIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LayoutSectionsHeaderIcon;
