import React, { useState } from 'react';


function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return(<>

        <div className="color-picker-container" style={{backgroundColor: color}}>
            <h1>Color Picker</h1>
            <p>{color}</p>
          
            <label>Select a color</label>
            <input type="color" value={color} 
                    onChange={handleColorChange}></input>

        </div>
    </>);
}

export default ColorPicker