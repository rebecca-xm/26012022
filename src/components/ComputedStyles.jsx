import { useState } from "react";

const ComputedStyles = () => {
    const [hasMoved, setMoved] = useState(false);
    const move = () => setMoved(!hasMoved);
    // ^ !hasMoved setta il contrario del suo stato attuale
    const moving = (hasMoved) => (hasMoved ? 'square move' : 'square');

    const [margin, setMargin] = useState(0);
    const onSlide = (event) => {
        // console.log(event.target.value);
        setMargin(parseInt(event.target.value));
    };

    return (
        <section>
            <h2>Computed Styles</h2>

            <button onClick={move}>Move square</button>
            <div className={moving(hasMoved)}></div>

            <h3>Change in line</h3>
            <input type='range' min='0' max='300' step='1' onChange={onSlide} />
            <div style={{marginLeft: margin + 'px'}} className='square'></div>
            {/* le prime graffe sono per il valore, le seconde perché sto passando
            come oggetto le proprietà css da applicare in linea in React
            CSS => margin-left (kebab case)
            JS => MarginLeft (camel case) */}
        </section>
    );
};

export default ComputedStyles;