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
          d="M12 3L3 3.00002C2.44771 3.00003 2 3.44774 2 4.00002V9.00003C2 9.55231 2.44772 10 3 10H7.50003C7.63264 10 7.75982 10.0527 7.85358 10.1465L10 12.2929V10.5C10 10.2239 10.2239 10 10.5 10H12C12.5523 10 13 9.55231 13 9.00003V4C13 3.44771 12.5523 3 12 3ZM2.99999 2.00002L12 2C13.1046 2 14 2.89543 14 4V9.00003C14 10.1046 13.1046 11 12 11H11V13.5C11 13.7022 10.8782 13.8845 10.6913 13.9619C10.5045 14.0393 10.2894 13.9965 10.1464 13.8535L7.29292 11H3C1.89543 11 1 10.1046 1 9.00003V4.00002C1 2.89545 1.89543 2.00003 2.99999 2.00002Z"
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
