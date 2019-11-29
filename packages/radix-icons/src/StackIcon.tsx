import * as React from 'react';
import { BaseIconProps } from './types';

interface StackIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
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
          d="M7.754 1.82a.5.5 0 00-.508 0l-5.5 3.25a.5.5 0 000 .86l5.5 3.25a.5.5 0 00.508 0l5.5-3.25a.5.5 0 000-.86l-5.5-3.25zM7.5 8.17L2.983 5.5 7.5 2.83l4.517 2.67L7.5 8.17zm-5.246.15a.5.5 0 00-.508.86l5.5 3.25a.5.5 0 00.508 0l5.5-3.25a.5.5 0 10-.508-.86L7.5 11.42l-5.246-3.1z"
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
