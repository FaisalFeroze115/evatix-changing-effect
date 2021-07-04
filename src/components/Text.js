import React from 'react'

const Text = ({styleElement}) => {
    return (
        <div className="u-size-30">
            <div className="u-layout-row">
                <div className="u-align-center u-container-style u-custom-color-11 u-layout-cell u-size-60 u-layout-cell-1">
                <div style={styleElement ? styleElement : null} className="u-container-layout u-valign-middle u-container-layout-1 selected_div">
                    <h2 style={ styleElement ? {fontFamily: styleElement.fontFamily} : null}>Change text and generate Code!</h2>
                    <p>By pressing the buttons below, one can change the text box color, font family and font color all together or one by one. For example, when someone clicks cyan&nbsp; button, text color of this box and the heading should change to cyan from black. In the box below with a heading 'Code' should print the html/ css styling for the current text and text box styling. It should change,&nbsp; when any of the following buttons are clicked, accordingly so that when someone copies the code it&nbsp; reproduces a similar text box like this one.&nbsp; Reset button&nbsp; should remove all effects.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Text
