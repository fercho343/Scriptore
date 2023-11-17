//@ts-ignore
import html2pdf from "html2pdf.js";
import React, { RefObject } from "react";
import { PdfButton } from "./header.styled";

export const ExportButton: React.FC<Props> = ({ canvasRef, setZoomLevel }) => {
	const exportarAPDF = () => {
		if (canvasRef.current) {
			const content = document.getElementById("ScriptID");
			//@ts-ignore
			content.style.transform = "scale(1.0)";
			setZoomLevel(1);

			const pdfOptions = {
				margin: [20, 0, 25, 0],
				filename: "documento.pdf",
				image: { type: "jpeg", quality: 0.98 },
				html2canvas: { scale: 2, scrollY: 0, scrollX: 0 },
				jsPDF: {
					unit: "mm",
					format: "a4",
					orientation: "portrait",
					putOnlyUsedFonts: true,
				},
			};

			html2pdf().from(content).set(pdfOptions).save();
		}
	};

	return <PdfButton onClick={exportarAPDF}>PDF</PdfButton>;
};

interface Props {
	canvasRef: RefObject<HTMLDivElement>;
	setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
}
