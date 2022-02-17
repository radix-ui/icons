import React from 'react';
import { Text, styled } from '@modulz/design-system';
import {
  Tooltip as TooltipPrimitive,
  TooltipContent as TooltipPrimitiveContent,
  TooltipTrigger as TooltipPrimitiveTrigger,
  // TooltipProps as TooltipPrimitiveProps,
  // TooltipContentProps,
  // TooltipPositionProps,
  // styles as tooltipStyles,
} from '@interop-ui/react-tooltip';

export type TooltipProps = { label: string } & React.ComponentProps<typeof TooltipPrimitive> &
  React.ComponentProps<typeof TooltipPrimitiveContent>;

export const Tooltip = ({
  'aria-label': ariaLabel,
  children,
  label,
  open,
  onOpenChange,
  ...contentProps
}: TooltipProps) => {
  return (
    <TooltipPrimitive open={open} onOpenChange={onOpenChange}>
      {children}
      <TooltipPrimitiveContent side="top" sideOffset={20} as={Content} aria-label={ariaLabel} {...contentProps}>
        {label}
      </TooltipPrimitiveContent>
    </TooltipPrimitive>
  );
};

Tooltip.Trigger = TooltipPrimitiveTrigger;

const Content = styled(Text, {
  // ...tooltipStyles.root,
  backgroundColor: '$hiContrast',
  fontSize: '$1',
  color: '$loContrast',
  borderRadius: '$1',
  padding: '$1 $2',
});
