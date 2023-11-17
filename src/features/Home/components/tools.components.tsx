import { RefObject, useState } from "react";
import {
	BoldIcon,
	ItalicIcon,
	ToolsContent,
	UnderlineIcon,
} from "./header.styled";

export const Tools: React.FC<Props> = ({ canvasRef }) => {
	const [boldActivate, setBoldActivate] = useState<boolean>(false);
	const [italicActivate, setItalicActivate] = useState<boolean>(false);
	const [underlineActivate, setUnderlineActivate] = useState<boolean>(false);

	const handleBoldClick = () => {
		if (canvasRef.current) {
			//@ts-ignore
			document.execCommand("bold", false, null);
			setBoldActivate(document.queryCommandState("bold"));
			canvasRef.current.focus();
		}
	};

	const handleItalicClick = () => {
		if (canvasRef.current) {
			//@ts-ignore
			document.execCommand("italic", false, null);
			setItalicActivate(document.queryCommandState("italic"));
			canvasRef.current.focus();
		}
	};

	const handleUnderlineClick = () => {
		if (canvasRef.current) {
			//@ts-ignore
			document.execCommand("underline", false, null);
			setUnderlineActivate(document.queryCommandState("underline"));
			canvasRef.current.focus();
		}
	};

	return (
		<ToolsContent>
			<BoldIcon $isActive={boldActivate} onClick={handleBoldClick}>
				B
			</BoldIcon>
			<ItalicIcon $isActive={italicActivate} onClick={handleItalicClick}>
				I
			</ItalicIcon>
			<UnderlineIcon
				$isActive={underlineActivate}
				onClick={handleUnderlineClick}
			>
				U
			</UnderlineIcon>
		</ToolsContent>
	);
};

interface Props {
	canvasRef: RefObject<HTMLDivElement>;
}
