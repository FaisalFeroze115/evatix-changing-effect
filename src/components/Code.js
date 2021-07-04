import React, {useEffect} from 'react'

const Code = ({styleElement}) => {

    useEffect(()=>{
        console.log(styleElement);
    },[])

    return (
        <div className="u-container-style u-layout-cell u-size-27 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-3">
                <h6 className="u-text u-text-default u-text-6">Code:</h6>
                <div className="u-border-1 u-border-palette-5-dark-1 u-shape u-shape-rectangle u-shape-1"></div>
                <p className="u-custom-font u-font-georgia u-text u-text-default u-text-palette-5-dark-3 u-text-7">
                    Code&nbsp; for the&nbsp; above text box should be printed here. <br/>
                    content : <br/>
                    background-color: {styleElement.backgroundColor} <br/>
                    font-family: {styleElement.fontFamily} <br/>
                    color: {styleElement.color} 
                </p>
            </div>
        </div>
    )
}

export default Code
