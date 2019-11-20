import * as React from 'react';
import { BaseIconProps } from './types';

interface PaperAirplaneIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const PaperAirplaneIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: PaperAirplaneIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M22.5 12.5l-18-8v6.537a.5.5 0 00.462.498L17.5 12.5l-12.538.964a.5.5 0 00-.462.499V20.5l18-8z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`PaperAirplaneIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PaperAirplaneIcon;
