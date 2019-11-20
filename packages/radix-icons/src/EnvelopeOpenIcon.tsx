import * as React from 'react';
import { BaseIconProps } from './types';

interface EnvelopeOpenIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const EnvelopeOpenIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: EnvelopeOpenIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5 11l7.5 5.5L20 11M5 20l5.5-4.5M20 20l-5.5-4.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 10.75V20a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-9.25a.5.5 0 00-.2-.4L12.5 4.5l-7.8 5.85a.5.5 0 00-.2.4z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`EnvelopeOpenIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default EnvelopeOpenIcon;
