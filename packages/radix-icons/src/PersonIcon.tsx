import * as React from 'react';
import { IconProps } from './types';

export const PersonIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        d="M7.50003 1.02496C5.58084 1.02496 4.02503 2.58077 4.02503 4.49996C4.02503 6.41915 5.58084 7.97496 7.50003 7.97496C9.41922 7.97496 10.975 6.41915 10.975 4.49996C10.975 2.58077 9.41922 1.02496 7.50003 1.02496ZM4.97503 4.49996C4.97503 3.10544 6.10551 1.97496 7.50003 1.97496C8.89455 1.97496 10.025 3.10544 10.025 4.49996C10.025 5.89448 8.89455 7.02496 7.50003 7.02496C6.10551 7.02496 4.97503 5.89448 4.97503 4.49996ZM2.97503 13.5999C2.97503 12.0411 3.42148 10.9569 4.1632 10.2582C4.90981 9.55483 6.0266 9.17491 7.49996 9.17491C8.97331 9.17491 10.0901 9.55483 10.8368 10.2582C11.5785 10.9569 12.025 12.0412 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.0749 12.975 13.8623 12.975 13.5999C12.975 11.8587 12.4714 10.4929 11.4882 9.56668C10.5098 8.64501 9.1266 8.22491 7.49996 8.22491C5.87331 8.22491 4.49015 8.64501 3.51179 9.56668C2.52855 10.4929 2.02503 11.8587 2.02503 13.5999C2.02503 13.8623 2.2377 14.0749 2.50003 14.0749C2.76237 14.0749 2.97503 13.8623 2.97503 13.5999Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PersonIcon;
