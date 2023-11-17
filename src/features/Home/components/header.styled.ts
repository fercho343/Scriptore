import styled from "styled-components";

export const Bar = styled.div`
    width: 100%;
    padding: 10px 20px;
    background: #222222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    margin-bottom: 10px;
`;

export const Side = styled.div`
    display: flex;
    align-items: center;
`;

export const Input = styled.select`
    padding: 10px  20px;
    background-color: #222222;
    color: #ffffff;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px  20px;
    background-color: #222222;
    color: #ffffff;
    border-radius: 5px;
`;

export const Option = styled.option`
    padding: 10px 0;
`;

export const ToolsContent = styled.div`
    border-left: 1px solid #fff;
    margin-left: 20px;
    padding: 10px 20px;
    display: flex;
    gap: 0 15px;
`;

interface IconProps {
	$isActive: boolean;
}

export const Icon = styled.p<IconProps>`
    color: ${({ $isActive }) => ($isActive ? "purple" : "#fff")};
    font-size: 20px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.5;
    }
`;

export const BoldIcon = styled(Icon)`
    font-weight: bold;
`;

export const ItalicIcon = styled(Icon)`
    font-style: italic;
`;

export const UnderlineIcon = styled(Icon)`
    text-decoration: underline;
`;

export const PdfButton = styled.p`
    color: #fff;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.5;
    }
    margin-left: 20px;
`;
