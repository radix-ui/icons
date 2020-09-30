import * as React from 'react';
import { IconProps } from './types';

export const AlignCenterIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.99994 7.05002V4H8.99994V7.05002L5.99994 7.05002ZM4.99994 7.05002H1.49913C1.25061 7.05002 1.04913 7.25149 1.04913 7.50002C1.04913 7.74855 1.25061 7.95002 1.49913 7.95002H4.99994V11.25C4.99994 11.6642 5.33573 12 5.74994 12H9.24994C9.66415 12 9.99994 11.6642 9.99994 11.25V7.95002H13.4991C13.7477 7.95002 13.9491 7.74855 13.9491 7.50002C13.9491 7.2515 13.7477 7.05002 13.4991 7.05002H9.99994V3.75C9.99994 3.33579 9.66415 3 9.24994 3H5.74994C5.33573 3 4.99994 3.33579 4.99994 3.75V7.05002ZM8.99994 7.95002V11H5.99994V7.95002L8.99994 7.95002Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlignCenterIcon;
