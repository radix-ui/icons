import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CaretDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.9318 6.9318C5.10754 6.75606 5.39246 6.75606 5.5682 6.9318L7.5 8.8636L9.4318 6.9318C9.60753 6.75606 9.89246 6.75606 10.0682 6.9318C10.2439 7.10753 10.2439 7.39246 10.0682 7.56819L7.8182 9.81819C7.7338 9.90259 7.61934 9.95 7.5 9.95C7.38065 9.95 7.26619 9.90259 7.1818 9.81819L4.9318 7.56819C4.75606 7.39246 4.75606 7.10753 4.9318 6.9318Z"
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
          d="M4.54289 6.54289C4.93342 6.15237 5.56658 6.15237 5.95711 6.54289L7.5 8.08579L9.04289 6.54289C9.43342 6.15237 10.0666 6.15237 10.4571 6.54289C10.8476 6.93342 10.8476 7.56658 10.4571 7.95711L8.20711 10.2071C8.01957 10.3946 7.76522 10.5 7.5 10.5C7.23478 10.5 6.98043 10.3946 6.79289 10.2071L4.54289 7.95711C4.15237 7.56658 4.15237 6.93342 4.54289 6.54289Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.93179 6.9318C5.10753 6.75606 5.39245 6.75606 5.56819 6.9318L7.49999 8.8636L9.43179 6.9318C9.60753 6.75606 9.89245 6.75606 10.0682 6.9318C10.2439 7.10753 10.2439 7.39246 10.0682 7.56819L7.81819 9.81819C7.73379 9.90259 7.61934 9.95 7.49999 9.95C7.38064 9.95 7.26618 9.90259 7.18179 9.81819L4.93179 7.56819C4.75605 7.39246 4.75605 7.10753 4.93179 6.9318Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretDownIcon;
