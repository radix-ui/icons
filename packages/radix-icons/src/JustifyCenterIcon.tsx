import * as React from 'react';
import { IconProps } from './types';

export const JustifyCenterIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M7.94998 6L11 6L11 9L7.94998 9L7.94998 6ZM7.94998 5L7.94998 1.49919C7.94998 1.25067 7.74851 1.04919 7.49998 1.04919C7.25145 1.04919 7.04998 1.25067 7.04998 1.49919L7.04998 5L3.75 5C3.33579 5 3 5.33579 3 5.75L3 9.25C3 9.66421 3.33579 10 3.75 10L7.04998 10L7.04998 13.4992C7.04998 13.7477 7.25145 13.9492 7.49998 13.9492C7.7485 13.9492 7.94998 13.7477 7.94998 13.4992L7.94998 10L11.25 10C11.6642 10 12 9.66421 12 9.25L12 5.75C12 5.33579 11.6642 5 11.25 5L7.94998 5ZM7.04998 9L4 9L4 6L7.04998 6L7.04998 9Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default JustifyCenterIcon;
