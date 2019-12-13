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
          d="M2.5 2.5a1 1 0 00-1 1v6a1 1 0 001 1h5.707l.147.146 2.146 2.147V10.5h2a1 1 0 001-1v-6a1 1 0 00-1-1h-10zm-2 1a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2h-1v1.293c0 .89-1.077 1.337-1.707.707l-2-2H2.5a2 2 0 01-2-2v-6z"
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
