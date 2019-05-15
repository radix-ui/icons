import * as React from 'react';
import { BaseIconProps } from './types';

interface Ratio23IconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const Ratio23Icon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: Ratio23IconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M19.5 8.5h-14v8h14v-8z" stroke={color} />
      </svg>
    );
  }

  console.error(
    `Ratio23Icon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default Ratio23Icon;
