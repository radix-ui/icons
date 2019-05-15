import * as React from 'react';
import { BaseIconProps } from './types';

interface DotsVerticalIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const DotsVerticalIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: DotsVerticalIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M12.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          fill={color}
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="7.5" cy="2.5" r="1.5" fill={color} />
        <circle cx="7.5" cy="7.5" r="1.5" fill={color} />
        <circle cx="7.5" cy="12.5" r="1.5" fill={color} />
      </svg>
    );
  }

  console.error(
    `DotsVerticalIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default DotsVerticalIcon;
