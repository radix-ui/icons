import * as React from 'react';
import { BaseIconProps } from './types';

interface LineHeightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const LineHeightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: LineHeightIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.782 1.717a.4.4 0 00-.565 0l-1.5 1.5a.4.4 0 00.565.566l.818-.817v9.068l-.818-.817a.4.4 0 00-.565.566l1.5 1.5a.4.4 0 00.565 0l1.5-1.5a.4.4 0 00-.565-.566l-.817.817V2.966l.817.817a.4.4 0 10.565-.566l-1.5-1.5zM7.5 4a.5.5 0 000 1h6a.5.5 0 000-1h-6zM7 7.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 100 1h4a.5.5 0 000-1h-4z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LineHeightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LineHeightIcon;
