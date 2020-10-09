import * as React from 'react';
import { IconProps } from './types';

export const Cross2Icon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M11.7816 4.03157C12.0061 3.80702 12.0061 3.44295 11.7816 3.2184C11.557 2.99385 11.193 2.99385 10.9684 3.2184L7.49999 6.68682L4.03157 3.2184C3.80702 2.99385 3.44295 2.99385 3.2184 3.2184C2.99385 3.44295 2.99385 3.80702 3.2184 4.03157L6.68682 7.49999L3.2184 10.9684C2.99385 11.193 2.99385 11.557 3.2184 11.7816C3.44295 12.0061 3.80702 12.0061 4.03157 11.7816L7.49999 8.31316L10.9684 11.7816C11.193 12.0061 11.557 12.0061 11.7816 11.7816C12.0061 11.557 12.0061 11.193 11.7816 10.9684L8.31316 7.49999L11.7816 4.03157Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Cross2Icon;
