import * as React from 'react';
import { BaseIconProps } from './types';

interface CubeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CubeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CubeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.276 1.053a.5.5 0 01.448 0l5 2.5A.5.5 0 0113 4v6.5a.5.5 0 01-.276.447l-5 2.5a.5.5 0 01-.448 0l-5-2.5A.5.5 0 012 10.5V4a.5.5 0 01.276-.447l5-2.5zM3 4.809l4 2v5.382l-4-2V4.809zm5 7.382l4-2V4.809l-4 2v5.382zm-.5-6.25L11.382 4 7.5 2.059 3.618 4 7.5 5.941z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CubeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CubeIcon;
