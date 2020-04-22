import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowBottomRightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const ArrowBottomRightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ArrowBottomRightIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowBottomRightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowBottomRightIcon;
