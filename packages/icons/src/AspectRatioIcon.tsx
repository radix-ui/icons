import * as React from 'react';
import { BaseIconProps } from './types';

interface AspectRatioIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const AspectRatioIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: AspectRatioIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x="2.5" y="2.5" width="10" height="10" rx=".5" stroke={color} />
        <path d="M3 8.5h2M6 8.5h3M10 8.5h2" stroke={color} />
      </svg>
    );
  }

  console.error(
    `AspectRatioIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default AspectRatioIcon;
