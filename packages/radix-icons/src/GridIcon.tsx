import * as React from 'react';
import { BaseIconProps } from './types';

interface GridIconProps extends BaseIconProps {
  size: '15';
  type?: 'outline';
}

export const GridIcon = ({
  color = 'currentColor',
  size,
  type = 'outline',
  ...props
}: GridIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12 2.5H3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5zM7.5 2v11M13 7.5H2"
          stroke={color}
        />
      </svg>
    );
  }

  console.error(`GridIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default GridIcon;
