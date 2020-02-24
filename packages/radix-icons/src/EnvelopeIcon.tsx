import * as React from 'react';
import { BaseIconProps } from './types';

interface EnvelopeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const EnvelopeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: EnvelopeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 3C1.44772 3 1 3.44772 1 4V11C1 11.5523 1.44772 12 2 12H13C13.5523 12 14 11.5523 14 11V4C14 3.44771 13.5523 3 13 3H2ZM12.7512 4H2.24877C2.25594 4.00477 2.26302 4.00977 2.27 4.015L7.5 7.9375L12.73 4.015C12.737 4.00977 12.7441 4.00477 12.7512 4ZM2 4.9375V11H13V4.9375L7.77 8.86C7.61 8.98 7.39 8.98 7.23 8.86L2 4.9375Z"
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
          d="M2 3.5C1.72386 3.5 1.5 3.72386 1.5 4V11C1.5 11.2761 1.72386 11.5 2 11.5H13C13.2761 11.5 13.5 11.2761 13.5 11V4C13.5 3.72386 13.2761 3.5 13 3.5H2Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M2 2.99997C1.44772 2.99997 1 3.44768 1 3.99997V11C1 11.5523 1.44772 12 2 12H13C13.5523 12 14 11.5523 14 11V3.99997C14 3.44768 13.5523 2.99997 13 2.99997H2ZM12.7512 3.99997H2.24877C2.25594 4.00474 2.26302 4.00974 2.27 4.01497L7.5 7.93747L12.73 4.01497C12.737 4.00974 12.7441 4.00474 12.7512 3.99997ZM2 4.93747V11H13V4.93747L7.77 8.85997C7.61 8.97997 7.39 8.97997 7.23 8.85997L2 4.93747Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M7.5 7.49997L2 3.375L2.5 2.5H12.5L13 3.375L7.5 7.49997Z" fill={color} />
      </svg>
    );
  }

  console.error(`EnvelopeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default EnvelopeIcon;
