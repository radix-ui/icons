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
          d="M7.217 1.717a.4.4 0 01.565 0l2.5 2.5a.4.4 0 11-.565.566L7.9 2.966v9.068l1.817-1.817a.4.4 0 01.565.566l-2.5 2.5a.4.4 0 01-.565 0l-2.5-2.5a.4.4 0 01.565-.566L7.1 12.034V2.966L5.282 4.783a.4.4 0 11-.565-.566l2.5-2.5z"
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
