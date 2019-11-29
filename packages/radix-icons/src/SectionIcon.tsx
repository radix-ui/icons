import * as React from 'react';
import { BaseIconProps } from './types';

interface SectionIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const SectionIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SectionIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 2.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM12 6H3v3h9V6zM3 5a1 1 0 00-1 1v3a1 1 0 001 1h9a1 1 0 001-1V6a1 1 0 00-1-1H3zm3.5-3a.5.5 0 000 1h2a.5.5 0 000-1h-2zm3.5.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM2.5 12a.5.5 0 000 1h2a.5.5 0 000-1h-2zm3.5.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4.5-.5a.5.5 0 000 1h2a.5.5 0 000-1h-2z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SectionIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SectionIcon;
