import React from 'react'

const Buttons = ({onClickHandeler}) => {
    return (
        <div className="u-container-style u-layout-cell u-size-33 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-2">
                <h6 className="u-text u-text-default u-text-3">Background color:</h6>
                <button onClick={()=>onClickHandeler('bg','blue')}  className="u-btn u-btn-round u-button-style u-custom-color-9 u-hover-palette-1-light-1 u-radius-50 u-btn-1">blue</button>
                <button onClick={()=>onClickHandeler('bg','green')}  className="u-btn u-btn-round u-button-style u-custom-color-8 u-hover-palette-1-light-1 u-radius-50 u-btn-2">green</button>
                <button onClick={()=>onClickHandeler('bg','Red')}  className="u-btn u-btn-round u-button-style u-custom-color-7 u-hover-palette-1-light-1 u-radius-50 u-btn-3">Red</button>
                <h6 className="u-text u-text-default u-text-4">Font Family:</h6>
                <button onClick={()=>onClickHandeler('family','ubuntu')} className="u-black u-btn u-btn-round u-button-style u-custom-font u-font-ubuntu u-hover-palette-1-light-1 u-radius-50 u-btn-4">ubuntu</button>
                <button onClick={()=>onClickHandeler('family','roboto')} className="u-black u-btn u-btn-round u-button-style u-custom-font u-heading-font u-hover-palette-1-light-1 u-radius-50 u-btn-5">roboto</button>
                <button onClick={()=>onClickHandeler('family','courier new')} className="u-black u-btn u-btn-round u-button-style u-custom-font u-font-courier-new u-hover-palette-1-light-1 u-radius-50 u-btn-6">courier new</button>
                <h6 class="u-text u-text-default u-text-5">Font Color:</h6>
                <button onClick={()=>onClickHandeler('font','cyan')} className="u-border-3 u-border-palette-4-dark-1 u-btn u-btn-round u-button-style u-none u-radius-50 u-text-black u-btn-7">cyan</button>
                <button onClick={()=>onClickHandeler('font','purple')} className="u-border-3 u-border-custom-color-10 u-btn u-btn-round u-button-style u-none u-radius-50 u-text-black u-btn-8">purple</button>
                <button onClick={()=>onClickHandeler('font','black')} className="u-border-3 u-border-black u-btn u-btn-round u-button-style u-none u-radius-50 u-btn-9">black</button>
                <button onClick={()=>onClickHandeler('reset', 'default')} className="u-btn u-btn-round u-button-style u-hover-palette-2-dark-1 u-palette-3-light-2 u-radius-6 u-btn-10">RESET</button>
            </div>
        </div>
    )
}

export default Buttons
