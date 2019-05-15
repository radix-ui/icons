import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderDashedIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const BorderDashedIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BorderDashedIconProps) => {
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
          d="M7 11H2v3h5v-3zM15 11h-5v3h5v-3zM23 11h-5v3h5v-3z"
          fill={color}
        />
      </svg>
    );
  }

  console.error(
    `BorderDashedIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default BorderDashedIcon;
