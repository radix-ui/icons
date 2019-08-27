import * as React from 'react';
import { BaseIconProps } from './types';

interface JustifyEndIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const JustifyEndIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: JustifyEndIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20.5 4.5v16" stroke={color} strokeLinecap="round" />
        <path d="M16.5 8.5h-4v8h4v-8zM20.5 8.5h-4v8h4v-8z" stroke={color} />
      </svg>
    );
  }

  console.error(`JustifyEndIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default JustifyEndIcon;
