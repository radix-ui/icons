import { styled } from '@modulz/design-system';

export const CodeBlock = styled('pre', {
  backgroundColor: '$slate1',
  boxShadow: 'inset 0 0 0 1px $colors$slate3',
  color: '$slate11',
  fontFamily: '$mono',
  fontSize: '$2',
  overflowX: 'auto',
  maxWidth: '100%',
  overflowWrap: 'normal',
  padding: '$3 $4',
  borderRadius: '$2',
  lineHeight: '25px',
  margin: 0,
});
