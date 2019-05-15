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
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          stroke={color}
          d="M2.5 5.5h10v4h-10zM2 2.5h3M6 2.5h3M10 2.5h3M2 12.5h3M6 12.5h3M10 12.5h3"
        />
      </svg>
    );
  }

  console.error(
    `SectionIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default SectionIcon;
