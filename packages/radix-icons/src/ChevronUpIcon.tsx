import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const ChevronUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ChevronUpIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.14645 9.35355C3.34171 9.54882 3.65829 9.54882 3.85355 9.35355L7.5 5.70711L11.1464 9.35355C11.3417 9.54882 11.6583 9.54882 11.8536 9.35355C12.0488 9.15829 12.0488 8.84171 11.8536 8.64645L7.85355 4.64645C7.65829 4.45118 7.34171 4.45118 7.14645 4.64645L3.14645 8.64645C2.95118 8.84171 2.95118 9.15829 3.14645 9.35355Z"
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
          d="M2.79289 9.70711C3.18342 10.0976 3.81658 10.0976 4.20711 9.70711L7.5 6.41421L10.7929 9.70711C11.1834 10.0976 11.8166 10.0976 12.2071 9.70711C12.5976 9.31658 12.5976 8.68342 12.2071 8.29289L8.20711 4.29289C7.81658 3.90237 7.18342 3.90237 6.79289 4.29289L2.79289 8.29289C2.40237 8.68342 2.40237 9.31658 2.79289 9.70711Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M3.14645 9.35355C3.34171 9.54882 3.65829 9.54882 3.85355 9.35355L7.5 5.70711L11.1464 9.35355C11.3417 9.54882 11.6583 9.54882 11.8536 9.35355C12.0488 9.15829 12.0488 8.84171 11.8536 8.64645L7.85355 4.64645C7.65829 4.45118 7.34171 4.45118 7.14645 4.64645L3.14645 8.64645C2.95118 8.84171 2.95118 9.15829 3.14645 9.35355Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronUpIcon;
