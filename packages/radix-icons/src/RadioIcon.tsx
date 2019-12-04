import * as React from 'react';
import { BaseIconProps } from './types';

interface RadioIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const RadioIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: RadioIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 1.127a6.373 6.373 0 100 12.746 6.373 6.373 0 000-12.746zM2.077 7.5a5.423 5.423 0 1110.846 0 5.423 5.423 0 01-10.846 0zM7.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 13.398a5.898 5.898 0 100-11.796 5.898 5.898 0 000 11.796z"
          fill={color}
          opacity=".15"
        />
        <path
          d="M7.5 1.127a6.373 6.373 0 100 12.746 6.373 6.373 0 000-12.746zM2.077 7.5a5.423 5.423 0 1110.846 0 5.423 5.423 0 01-10.846 0zM7.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`RadioIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default RadioIcon;
