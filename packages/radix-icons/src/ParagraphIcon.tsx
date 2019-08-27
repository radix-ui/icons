import * as React from 'react';
import { BaseIconProps } from './types';

interface ParagraphIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const ParagraphIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ParagraphIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.5 6.5h16M4.5 10.5h16M4.5 14.5h16M4.5 18.5h8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ParagraphIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ParagraphIcon;
