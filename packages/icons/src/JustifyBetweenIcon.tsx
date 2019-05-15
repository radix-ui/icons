import * as React from 'react';
import { BaseIconProps } from './types';

interface JustifyBetweenIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const JustifyBetweenIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: JustifyBetweenIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12.5 4.5v16" stroke={color} strokeLinecap="round" />
        <path d="M8.5 8.5h-4v8h4v-8zM20.5 8.5h-4v8h4v-8z" stroke={color} />
      </svg>
    );
  }

  console.error(
    `JustifyBetweenIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default JustifyBetweenIcon;
