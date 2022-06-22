import React from 'react';
import {ReactComponent as DecorationSvg} from "../assets/icons/Decoration.svg";

const TitleSvg = (props) => {
    return (
        <>
            <h2>{props.title1line}<br/>{props.title2line}</h2>
            <DecorationSvg/>
        </>
    );
};

export default TitleSvg;