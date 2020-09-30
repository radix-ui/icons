import * as React from 'react';
import { IconProps } from './types';

export const UnderlineIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.99999 2.75C4.99999 2.47386 4.77614 2.25 4.49999 2.25C4.22385 2.25 3.99999 2.47386 3.99999 2.75V8.05C3.99999 9.983 5.567 11.55 7.49999 11.55C9.43299 11.55 11 9.983 11 8.05V2.75C11 2.47386 10.7761 2.25 10.5 2.25C10.2239 2.25 9.99999 2.47386 9.99999 2.75V8.05C9.99999 9.43071 8.8807 10.55 7.49999 10.55C6.11928 10.55 4.99999 9.43071 4.99999 8.05V2.75ZM3.49996 13.1001C3.27904 13.1001 3.09996 13.2791 3.09996 13.5001C3.09996 13.721 3.27904 13.9001 3.49996 13.9001H11.5C11.7209 13.9001 11.9 13.721 11.9 13.5001C11.9 13.2791 11.7209 13.1001 11.5 13.1001H3.49996Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default UnderlineIcon;
