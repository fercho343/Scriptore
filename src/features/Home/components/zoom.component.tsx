import React, { ChangeEvent } from "react";
import { Input, Option } from "./header.styled";

export const Zoom: React.FC<Props> = ({ zoomLevel, setZoomLevel }) => {
	const handleZoomLevel = (event: ChangeEvent<HTMLSelectElement>) => {
		// Actualiza el estado con el nuevo valor seleccionado
		setZoomLevel(parseFloat(event.target.value));
	};

	return (
		<Input value={zoomLevel} onChange={handleZoomLevel}>
			<Option value="0.5">50%</Option>
			<option value="0.75">75%</option>
			<option value="1">100%</option>
			<option value="1.25">125%</option>
			<option value="1.5">150%</option>
			<option value="2">200%</option>
		</Input>
	);
};

interface Props {
	zoomLevel: number;
	setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
}
