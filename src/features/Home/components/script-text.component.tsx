import { RefObject } from "react";
import { Canvas, Container } from "./script-text.styled";

export const ScriptText: React.FC<Props> = ({ zoomLevel, canvasRef }) => {
	//@ts-ignore
	const handleInput = (event) => {};

	return (
		<Container>
			<Canvas
				id="ScriptID"
				ref={canvasRef}
				contentEditable={true}
				$zoomLevel={zoomLevel}
				onInput={handleInput}
				dir="ltr"
			/>
		</Container>
	);
};

interface Props {
	zoomLevel: number;
	canvasRef: RefObject<HTMLDivElement>;
}
