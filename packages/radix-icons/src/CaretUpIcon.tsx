import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretUpIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const CaretUpIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretUpIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.93181 8.0682C4.75607 7.89247 4.75607 7.60754 4.9318 7.43181L7.1818 5.18181C7.2662 5.09741 7.38066 5.05 7.5 5.05C7.61935 5.05 7.73381 5.09741 7.8182 5.18181L10.0682 7.43181C10.2439 7.60754 10.2439 7.89247 10.0682 8.0682C9.89247 8.24394 9.60754 8.24394 9.4318 8.0682L7.5 6.1364L5.5682 8.0682C5.39247 8.24394 5.10754 8.24394 4.93181 8.0682Z"
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
          d="M4.54289 8.45711C4.15237 8.06658 4.15237 7.43342 4.54289 7.04289L6.79289 4.79289C6.98043 4.60536 7.23478 4.5 7.5 4.5C7.76522 4.5 8.01957 4.60536 8.20711 4.79289L10.4571 7.04289C10.8476 7.43342 10.8476 8.06658 10.4571 8.45711C10.0666 8.84763 9.43342 8.84763 9.04289 8.45711L7.5 6.91421L5.95711 8.45711C5.56658 8.84763 4.93342 8.84763 4.54289 8.45711Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.93179 8.0682C4.75605 7.89247 4.75605 7.60754 4.93179 7.43181L7.18179 5.18181C7.26618 5.09741 7.38064 5.05 7.49999 5.05C7.61933 5.05 7.73379 5.09741 7.81819 5.18181L10.0682 7.43181C10.2439 7.60754 10.2439 7.89247 10.0682 8.0682C9.89245 8.24394 9.60753 8.24394 9.43179 8.0682L7.49999 6.1364L5.56819 8.0682C5.39245 8.24394 5.10753 8.24394 4.93179 8.0682Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretUpIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretUpIcon;
