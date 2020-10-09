import { styled } from '@modulz/design-system';

export const CodeBlock = styled('pre', {
  backgroundColor: '$gray200',
  color: '$gray900',
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
