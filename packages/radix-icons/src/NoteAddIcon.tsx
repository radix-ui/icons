import * as React from 'react';
import { BaseIconProps } from './types';

interface NoteAddIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const NoteAddIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: NoteAddIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9 16.5h7m-7-6h7-7zm0 3h7-7z" stroke={color} />
        <path
          d="M18.5 10.5v-6m-3 3h6-6zM18.5 13.5v5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`NoteAddIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default NoteAddIcon;
