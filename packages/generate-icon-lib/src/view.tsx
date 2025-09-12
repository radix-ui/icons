import * as React from "react";
import type { Instance as InkInstance } from "ink";
import { render as inkRender, Box, Text, Static } from "ink";
import InkSpinner from "ink-spinner";
import type { IDiffSummary } from "./types.js";

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
		<Text color="cyan">
			<InkSpinner />
		</Text>
		<Text> </Text>
		<Text>{text}</Text>
	</Box>
);

const CliView = ({ state }: ICliViewProps) => {
	return (
		<Box flexDirection="column">
			{state.fileKey && (
				<Static<{
					title: string;
					description: string;
					highlight?: boolean;
				}>
					items={[
						{
							title: "Generate Icon Lib",
							description: "(Figma File → NPM Package)",
						},
						{
							title: "Figma File",
							description: state.fileKey,
							highlight: true,
						},
					]}
				>
					{(item, index) => (
						<Box
							key={item.title}
							marginTop={index === 0 ? 1 : 0}
							marginBottom={1}
						>
							<Text bold>{item.title}: </Text>
							<Text
								{...(item.highlight
									? { underline: true, color: "magenta" }
									: { dimColor: true })}
							>
								{item.description}
							</Text>
						</Box>
					)}
				</Static>
			)}

			{state.spinners && (
				<Box marginLeft={1} flexDirection="column">
					<Static items={state.spinners.filter((entry) => entry.success)}>
						{(entry) => (
							<Box marginLeft={1} key={entry.text}>
								<Text color="green">✓</Text>
								<Text> </Text>
								<Text>{entry.text}</Text>
							</Box>
						)}
					</Static>
					{state.spinners
						.filter((entry) => !entry.success)
						.map((entry) => (
							<Spinner key={entry.text} text={entry.text} />
						))}
				</Box>
			)}

			{state.progress && (
				<Box marginLeft={1}>
					<Spinner
						text={`${state.progress.text} [${Math.floor(
							state.progress.percent * 100,
						)}%]`}
					/>
				</Box>
			)}

			{state.diff && <DiffView state={state} />}
		</Box>
	);
};

const DiffView = ({ state }: ICliViewProps) => {
	const statsWithChanges = state.diff
		? state.diff.filter((stat) => stat.additions > 0 || stat.deletions > 0)
		: [];
	const totals = {
		additions: statsWithChanges.reduce(
			(total, stat) => stat.additions + total,
			0,
		),
		deletions: statsWithChanges.reduce(
			(total, stat) => stat.deletions + total,
			0,
		),
	};
	return (
		<Static
			items={[
				{ id: "numstat-title", tree: <Text bold>Summary of Update</Text> },
				{
					id: "numstat-files",
					tree: (
						<>
							<Box flexDirection="column" flexGrow={0}>
								{statsWithChanges.map((stat) => (
									<Text key={stat.filePath} dimColor>
										{stat.filePath}
									</Text>
								))}
							</Box>

							<Box flexDirection="column" flexGrow={0} paddingLeft={1}>
								{statsWithChanges.map((stat) => (
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
								{statsWithChanges.map((stat) => (
									<Text key={stat.filePath}>
										{stat.additions + stat.deletions}
									</Text>
								))}
							</Box>

							<Box flexDirection="column" paddingLeft={1}>
								{statsWithChanges.map((stat) => (
									<Box key={stat.filePath}>
										{stat.status === "D" && <Text color="red">Removed</Text>}
										{stat.status === "A" && <Text color="green">New</Text>}
										{stat.status === "M" &&
										stat.additions > 0 &&
										stat.deletions === 0 ? (
											<Text color="green">++</Text>
										) : null}
										{stat.status === "M" &&
										stat.additions === 0 &&
										stat.deletions > 0 ? (
											<Text color="red">--</Text>
										) : null}
										{stat.status === "M" &&
										stat.additions > 0 &&
										stat.deletions > 0 ? (
											<>
												<Text color="green">+</Text>
												<Text color="red">-</Text>
											</>
										) : null}
									</Box>
								))}
							</Box>
						</>
					),
				},
				{
					id: "numstat-summary",
					tree: (
						<Text underline>
							{statsWithChanges.length} file updates, {totals.additions}
							<Text> </Text>
							additions <Text color="green">(+)</Text>, {totals.deletions}
							<Text> </Text>
							deletions <Text color="red">(-)</Text>
						</Text>
					),
				},
			]}
		>
			{(item, index) => (
				<Box key={item.id} marginTop={1} marginLeft={index === 0 ? 0 : 1}>
					{item.tree}
				</Box>
			)}
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
