// Editor.js
import React, { useState } from "react";
import styled from "styled-components";

const StyledEditor = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  min-height: 200px;
`;

const BoldButton = styled.button`
  font-weight: bold;
  margin-right: 5px;
`;

const StyleButton = styled.button`
  margin-right: 5px;
`;

const Editor = () => {
	const [content, setContent] = useState("");

	const handleBoldClick = () => {
		document.execCommand("bold", false, null);
	};

	const handleStyleClick = (style) => {
		const selection = window.getSelection();
		const range = selection.getRangeAt(0);

		// Crear un nuevo elemento con la clase correspondiente
		const element = document.createElement("span");
		element.classList.add(style);

		// Clonar el contenido seleccionado al nuevo elemento
		const clonedContent = range.cloneContents();
		element.appendChild(clonedContent);

		// Reemplazar el contenido seleccionado con el nuevo elemento
		range.deleteContents();
		range.insertNode(element);
	};

	const handleContentChange = (e) => {
		setContent(e.target.innerHTML);
	};

	return (
		<div>
			<BoldButton onClick={handleBoldClick}>B</BoldButton>
			<StyleButton onClick={() => handleStyleClick("scene-headline")}>
				Scene Headline
			</StyleButton>
			<StyleButton onClick={() => handleStyleClick("character")}>
				Character
			</StyleButton>
			<StyleButton onClick={() => handleStyleClick("brackets")}>
				Brackets
			</StyleButton>
			<StyleButton onClick={() => handleStyleClick("actions")}>
				Actions
			</StyleButton>
			<StyleButton onClick={() => handleStyleClick("dialogue")}>
				Dialogue
			</StyleButton>
			<StyledEditor
				contentEditable
				onInput={handleContentChange}
				// dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

export default Editor;
