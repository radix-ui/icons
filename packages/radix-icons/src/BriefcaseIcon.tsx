import * as React from 'react';
import { BaseIconProps } from './types';

interface BriefcaseIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const BriefcaseIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: BriefcaseIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 14.5v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"
          stroke={color}
          strokeLinejoin="round"
        />
        <path
          d="M4.5 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v4a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 12V8zm4-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.5h-8V6z"
          stroke={color}
        />
        <path d="M12.5 13.5v4" stroke={color} strokeLinejoin="round" />
      </svg>
    );
  }

  console.error(`BriefcaseIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BriefcaseIcon;
