import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    /* background-color: purple; */
    height: 90%;
    overflow-y: auto;
`;

export const Canvas = styled.div<CanvasProps>`
    padding: 20px 139px; 
    margin: 20px 0; 
    min-height: 297mm; 
    width: 210mm; 
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    transform-origin: top center; 
    transition: transform 0.3s ease;
    font-family: 'Courier Prime', monospace;
    font-size: 16px;
    line-height: 17px;
    letter-spacing: normal;
    font-weight: 400;
    color: #000;
    transform: ${({ $zoomLevel }) => `scale(${$zoomLevel})`};
    overflow-y: auto;
    line-height: 17px !important;
    margin-top: 0px !important;
    margin-bottom: 17px !important;
    margin-bottom: 17px;

    & div {
        margin-bottom: 17px;
    }

    & .scene-headline {
    text-transform: uppercase;
    background-color: silver;
    margin-bottom: 20px !important;
    margin-top: -3px !important;
  }

  & .character{
    margin-left: 1.9in !important;
    text-transform: uppercase;
  }

  & .brackets{
    margin-top: -17px !important;
    margin-left: 1.4in !important;
    margin-right: 1.4in !important;
    margin-bottom: 0px !important;
  }

  & .dialog{
    margin-left: 0.9in !important;
    margin-right: 1.35in !important;
  }

  & .action{
    
  }
`;

interface CanvasProps {
	$zoomLevel: number;
}

export const Suggestions = styled.div`
    position: absolute;
    background-color: #fff;
    border: 1px solid #ddd;
    max-height: 150px;
    overflow-y: auto;
    width: 150px;
`;

export const SuggestionItem = styled.div`
    padding: 8px;
    cursor: pointer;
`;
