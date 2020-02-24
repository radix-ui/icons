import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretSortIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CaretSortIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretSortIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.93179 5.43181C4.75605 5.60754 4.75605 5.89247 4.93179 6.0682C5.10753 6.24394 5.39245 6.24394 5.56819 6.0682L7.49999 4.1364L9.43179 6.0682C9.60753 6.24394 9.89245 6.24394 10.0682 6.0682C10.2439 5.89247 10.2439 5.60754 10.0682 5.43181L7.81819 3.18181C7.73379 3.09741 7.61933 3.05 7.49999 3.05C7.38064 3.05 7.26618 3.09741 7.18179 3.18181L4.93179 5.43181ZM10.0682 9.5682C10.2439 9.39247 10.2439 9.10754 10.0682 8.93181C9.89245 8.75607 9.60753 8.75607 9.43179 8.93181L7.49999 10.8636L5.56819 8.93181C5.39245 8.75607 5.10753 8.75607 4.93179 8.93181C4.75605 9.10754 4.75605 9.39247 4.93179 9.5682L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.5682Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretSortIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretSortIcon;
