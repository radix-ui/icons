import * as React from 'react';
import { BaseIconProps } from './types';

interface StackIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const StackIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: StackIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.754 1.82a.5.5 0 00-.508 0l-5.5 3.25a.5.5 0 000 .86l5.5 3.25a.5.5 0 00.508 0l5.5-3.25a.5.5 0 000-.86l-5.5-3.25zM7.5 8.17L2.983 5.5 7.5 2.83l4.517 2.67L7.5 8.17zm-5.246.15a.5.5 0 00-.508.86l5.5 3.25a.5.5 0 00.508 0l5.5-3.25a.5.5 0 00-.508-.86L7.5 11.42l-5.246-3.1z"
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
          opacity=".15"
          d="M7.5 11.5L2 8.25l2.5-1.477 3 1.727 3-1.727L13 8.25 7.5 11.5z"
          fill={color}
        />
        <g opacity=".2">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path
            d="M2 5.5l5.5 3.25L13 5.5 7.5 2.25 2 5.5zm.254 2.82a.5.5 0 00-.508.86l5.5 3.25a.5.5 0 00.508 0l5.5-3.25a.5.5 0 00-.508-.86L7.5 11.42l-5.246-3.1z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M7.754 1.82a.5.5 0 00-.508 0l-5.5 3.25a.5.5 0 000 .86l5.5 3.25a.5.5 0 00.508 0l5.5-3.25a.5.5 0 000-.86l-5.5-3.25zM7.5 8.17L2.983 5.5 7.5 2.83l4.517 2.67L7.5 8.17zm-5.246.15a.5.5 0 00-.508.86l5.5 3.25a.5.5 0 00.508 0l5.5-3.25a.5.5 0 00-.508-.86L7.5 11.42l-5.246-3.1z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`StackIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default StackIcon;
