import { RefObject } from "react";
import { Button } from "./header.styled";

export const Select: React.FC<Props> = ({ canvasRef }) => {
	const handleStyleClick = (style: string) => {
		const selection = window.getSelection();
		const range = selection?.getRangeAt(0);

		// Crear un nuevo elemento con la clase correspondiente
		const element = document.createElement("p");
		element.classList.add(style);

		// Clonar el contenido seleccionado al nuevo elemento
		const clonedContent = range?.cloneContents();
		//@ts-ignore
		element.appendChild(clonedContent);

		// Reemplazar el contenido seleccionado con el nuevo elemento
		range?.deleteContents();
		range?.insertNode(element);

		canvasRef?.current?.focus();
	};

	return (
		<>
			<Button onClick={() => handleStyleClick("scene-headline")}>
				Titulo de escena
			</Button>
			<Button onClick={() => handleStyleClick("action")}>Accion</Button>
			<Button onClick={() => handleStyleClick("character")}>Personaje</Button>
			<Button onClick={() => handleStyleClick("dialog")}>Dialogo</Button>
			<Button onClick={() => handleStyleClick("brackets")}>Parentesis</Button>
		</>
	);
};

interface Props {
	canvasRef: RefObject<HTMLDivElement>;
}
