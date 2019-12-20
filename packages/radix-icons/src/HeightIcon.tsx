import * as React from 'react';
import { BaseIconProps } from './types';

interface HeightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const HeightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: HeightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.181 1.682a.45.45 0 01.637 0l2.5 2.5a.45.45 0 01-.637.636L7.95 3.086v8.828l1.731-1.732a.45.45 0 01.637.636l-2.5 2.5a.45.45 0 01-.637 0l-2.5-2.5a.45.45 0 01.637-.636l1.732 1.732V3.086L5.318 4.818a.45.45 0 01-.637-.636l2.5-2.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`HeightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default HeightIcon;
