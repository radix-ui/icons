import * as React from 'react';
import { BaseIconProps } from './types';

interface BorderIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const BorderIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BorderIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 3.25C2 2.56 2.56 2 3.25 2h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5C2.56 13 2 12.44 2 11.75v-8.5zm1.5.25v8h8v-8h-8z"
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
          d="M2.75 3.25a.5.5 0 01.5-.5h8.5a.5.5 0 01.5.5v8.5a.5.5 0 01-.5.5h-8.5a.5.5 0 01-.5-.5v-8.5z"
          fill={color}
          opacity=".2"
        />
        <path
          d="M2 3.25C2 2.56 2.56 2 3.25 2h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5C2.56 13 2 12.44 2 11.75v-8.5zm1.5.25v8h8v-8h-8z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BorderIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BorderIcon;
