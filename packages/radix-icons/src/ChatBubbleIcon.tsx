import * as React from 'react';
import { BaseIconProps } from './types';

interface ChatBubbleIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ChatBubbleIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ChatBubbleIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M12 3.00003L3 3.00005C2.44771 3.00006 2 3.44777 2 4.00005V9.00006C2 9.55234 2.44772 10.0001 3 10.0001H7.50003C7.63264 10.0001 7.75982 10.0527 7.85358 10.1465L10 12.2929V10.5001C10 10.2239 10.2239 10.0001 10.5 10.0001H12C12.5523 10.0001 13 9.55234 13 9.00006V4.00003C13 3.44774 12.5523 3.00003 12 3.00003ZM2.99999 2.00005L12 2.00003C13.1046 2.00003 14 2.89546 14 4.00003V9.00006C14 10.1046 13.1046 11.0001 12 11.0001H11V13.5C11 13.7023 10.8782 13.8846 10.6913 13.962C10.5045 14.0394 10.2894 13.9966 10.1464 13.8536L7.29292 11.0001H3C1.89543 11.0001 1 10.1046 1 9.00006V4.00005C1 2.89548 1.89543 2.00006 2.99999 2.00005Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ChatBubbleIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ChatBubbleIcon;
