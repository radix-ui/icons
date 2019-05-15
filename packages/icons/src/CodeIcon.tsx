import * as React from 'react';
import { BaseIconProps } from './types';

interface CodeIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const CodeIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: CodeIconProps) => {
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
          d="M6.5 8.5l-4 4 4 4M18.5 8.5l4 4-4 4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.032 20.324a.5.5 0 0 0 .936.352l-.936-.352zm6.936-15.648a.5.5 0 0 0-.936-.352l.936.352zm-6 16l6-16-.936-.352-6 16 .936.352z"
          fill={color}
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M3.5 5.5l-2 2 2 2M11.5 5.5l2 2-2 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.036 12.314a.5.5 0 1 0 .928.372l-.928-.372zm4.928-9.628a.5.5 0 1 0-.928-.372l.928.372zm-4 10l4-10-.928-.372-4 10 .928.372z"
          fill={color}
        />
      </svg>
    );
  }

  console.error(
    `CodeIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default CodeIcon;
