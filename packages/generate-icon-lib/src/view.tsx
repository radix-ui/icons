import React from 'react';
import {
  render as inkRender,
  Box,
  Text,
  Static,
  Color,
  Instance as InkInstance,
} from 'ink';
import InkSpinner from 'ink-spinner';
import { IDiffSummary } from './types';

interface ICliState {
  fileKey?: string;
  spinners?: Array<{ success?: true; text: string }>;
  progress?: { text: string; percent: number };
  diff?: IDiffSummary[];
}

interface ICliViewProps {
  state: ICliState;
}

interface ISpinnerProps {
  text: string;
}

const Spinner = ({ text }: ISpinnerProps) => (
  <Box>
    <Color cyan>
      <InkSpinner />
    </Color>{' '}
    <Text>{text}</Text>
  </Box>
);

const CliView = ({ state }: ICliViewProps) => {
  return (
    <Box flexDirection="column">
      {state.fileKey && (
        <Static>
          {[
            <Box key="title" marginTop={1} marginBottom={1}>
              <Color bold>Generate Icon Lib </Color>
              <Color dim>(Figma File → NPM Package)</Color>
            </Box>,
            <Box key="fileKey" marginBottom={1}>
              <Color bold>Figma File: </Color>
              <Color underline magenta>
                {state.fileKey}
              </Color>
            </Box>,
          ]}
        </Static>
      )}

      {state.spinners && (
        <Box marginLeft={1} flexDirection="column">
          <Static>
            {state.spinners
              .filter(entry => entry.success)
              .map(entry => (
                <Box marginLeft={1} key={entry.text}>
                  <Color green>✓</Color> <Text>{entry.text}</Text>
                </Box>
              ))}
          </Static>
          {state.spinners
            .filter(entry => !entry.success)
            .map(entry => (
              <Spinner key={entry.text} text={entry.text} />
            ))}
        </Box>
      )}

      {state.progress && (
        <Box marginLeft={1}>
          <Spinner
            text={`${state.progress.text} [${Math.floor(
              state.progress.percent * 100
            )}%]`}
          />
        </Box>
      )}

      {state.diff && <DiffView state={state} />}
    </Box>
  );
};

const DiffView = ({ state }: ICliViewProps) => {
  const statsWithChanges = state.diff.filter(
    stat => stat.additions > 0 || stat.deletions > 0
  );
  const totals = {
    additions: statsWithChanges.reduce(
      (total, stat) => stat.additions + total,
      0
    ),
    deletions: statsWithChanges.reduce(
      (total, stat) => stat.deletions + total,
      0
    ),
  };
  return (
    <Static>
      {[
        <Box key="numstat-title" marginTop={1}>
          <Color bold>Summary of Update</Color>
        </Box>,
        <Box key="numstat-files" marginLeft={1} marginTop={1}>
          <Box flexDirection="column" flexGrow={0}>
            {statsWithChanges.map(stat => (
              <Color key={stat.filePath} dim>
                {stat.filePath}
              </Color>
            ))}
          </Box>

          <Box flexDirection="column" flexGrow={0} paddingLeft={1}>
            {statsWithChanges.map(stat => (
              <Text key={stat.filePath}>|</Text>
            ))}
          </Box>

          <Box
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            flexGrow={0}
            paddingLeft={1}
          >
            {statsWithChanges.map(stat => (
              <Text key={stat.filePath}>{stat.additions + stat.deletions}</Text>
            ))}
          </Box>

          <Box flexDirection="column" paddingLeft={1}>
            {statsWithChanges.map(stat => (
              <Box key={stat.filePath}>
                {stat.status === 'D' && <Color red>Removed</Color>}
                {stat.status === 'A' && <Color green>New</Color>}
                {stat.status === 'M' &&
                stat.additions > 0 &&
                stat.deletions === 0 ? (
                  <Color green>++</Color>
                ) : null}
                {stat.status === 'M' &&
                stat.additions === 0 &&
                stat.deletions > 0 ? (
                  <Color red>--</Color>
                ) : null}
                {stat.status === 'M' &&
                stat.additions > 0 &&
                stat.deletions > 0 ? (
                  <>
                    <Color green>+</Color>
                    <Color red>-</Color>
                  </>
                ) : null}
              </Box>
            ))}
          </Box>
        </Box>,
        <Box key="numstat-summary" marginLeft={1} marginTop={1}>
          <Color underline>
            {statsWithChanges.length} file updates, {totals.additions} additions{' '}
            <Color green>(+)</Color>, {totals.deletions} deletions{' '}
            <Color red>(-)</Color>
          </Color>
        </Box>,
      ]}
    </Static>
  );
};

let app: InkInstance;

export const render = (state: ICliState) => {
  if (app) {
    app.rerender(<CliView state={state} />);
  } else {
    app = inkRender(<CliView state={state} />);
  }
};
export const unmount = () => {
  if (app) {
    app.unmount();
  }
};
