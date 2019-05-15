import * as React from 'react';
import { BaseIconProps } from './types';

interface ListIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const ListIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ListIconProps) => {
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
          d="M8 17.5h13M4 17.5h2M8 12.5h13M4 12.5h2M8 7.5h13M4 7.5h2"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(
    `ListIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default ListIcon;
