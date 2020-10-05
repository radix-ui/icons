import * as React from 'react';
import { IconProps } from './types';

export const ReloadIcon = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.10643 7.50001C2.10643 4.67477 4.30825 1.8712 7.73524 1.8712C8.93048 1.8712 9.9018 2.40901 10.7058 3.12353C11.3866 3.72858 11.9133 4.42696 12.3443 4.99843L12.3444 4.99844L12.3444 4.99853C12.3448 4.99902 12.3452 4.99951 12.3455 5.00001H10.5C10.2238 5.00001 9.99999 5.22387 9.99999 5.50001C9.99999 5.77615 10.2238 6.00001 10.5 6.00001H13.5C13.7761 6.00001 14 5.77615 14 5.50001V2.50001C14 2.22387 13.7761 2.00001 13.5 2.00001C13.2238 2.00001 13 2.22387 13 2.50001V4.13644C12.5907 3.59832 12.0563 2.92923 11.3982 2.34438C10.4796 1.52795 9.27192 0.828827 7.73524 0.828827C3.65923 0.828827 1.06406 4.17526 1.06406 7.50001C1.06406 10.8248 3.65923 14.1712 7.73524 14.1712C9.68499 14.1712 11.3088 13.3996 12.4649 12.2233C13.0838 11.5935 13.5672 10.8495 13.8967 10.0488C14.0063 9.78264 13.8793 9.47805 13.6131 9.3685C13.3469 9.25896 13.0423 9.38593 12.9328 9.65212C12.6529 10.332 12.2432 10.9617 11.7215 11.4926C10.7535 12.4776 9.3944 13.1288 7.73524 13.1288C4.30825 13.1288 2.10643 10.3253 2.10643 7.50001Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ReloadIcon;
