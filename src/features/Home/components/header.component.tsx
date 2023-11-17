import { RefObject } from "react";
import { ExportButton } from "./export-button.component";
import { Bar, Side } from "./header.styled";
import { Select } from "./select.component";
import { Tools } from "./tools.components";
import { Zoom } from "./zoom.component";

export const Header: React.FC<Props> = ({
	zoomLevel,
	setZoomLevel,
	canvasRef,
}) => {
	return (
		<Bar>
			<Side>
				<Select canvasRef={canvasRef} />
				<Tools canvasRef={canvasRef} />
			</Side>

			<Side>
				<Zoom zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
				<ExportButton canvasRef={canvasRef} setZoomLevel={setZoomLevel} />
			</Side>
		</Bar>
	);
};

interface Props {
	zoomLevel: number;
	setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
	canvasRef: RefObject<HTMLDivElement>;
}
