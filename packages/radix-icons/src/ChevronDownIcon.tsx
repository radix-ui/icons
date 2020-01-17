import * as React from 'react';
import { BaseIconProps } from './types';

interface ChevronDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ChevronDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ChevronDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L7.5 9.29289L11.1464 5.64645C11.3417 5.45118 11.6583 5.45118 11.8536 5.64645C12.0488 5.84171 12.0488 6.15829 11.8536 6.35355L7.85355 10.3536C7.65829 10.5488 7.34171 10.5488 7.14645 10.3536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z"
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
          d="M2.79289 5.29289C3.18342 4.90237 3.81658 4.90237 4.20711 5.29289L7.5 8.58579L10.7929 5.29289C11.1834 4.90237 11.8166 4.90237 12.2071 5.29289C12.5976 5.68342 12.5976 6.31658 12.2071 6.70711L8.20711 10.7071C7.81658 11.0976 7.18342 11.0976 6.79289 10.7071L2.79289 6.70711C2.40237 6.31658 2.40237 5.68342 2.79289 5.29289Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L7.5 9.29289L11.1464 5.64645C11.3417 5.45118 11.6583 5.45118 11.8536 5.64645C12.0488 5.84171 12.0488 6.15829 11.8536 6.35355L7.85355 10.3536C7.65829 10.5488 7.34171 10.5488 7.14645 10.3536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChevronDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChevronDownIcon;
