import { useRef, useState } from "react";
import { Header } from "../components/header.component";
import { ScriptText } from "../components/script-text.component";
import { Body } from "../components/styled";

export const ScriptScreen = () => {
	const [zoomLevel, setZoomLevel] = useState<number>(1);

	const canvasRef = useRef<HTMLDivElement>(null);

	return (
		<Body>
			<Header
				zoomLevel={zoomLevel}
				setZoomLevel={setZoomLevel}
				canvasRef={canvasRef}
			/>

			<ScriptText zoomLevel={zoomLevel} canvasRef={canvasRef} />
		</Body>
	);
};
