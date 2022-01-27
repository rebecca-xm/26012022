import { useState } from "react";
import { Controls, PlayState, Tween } from "react-gsap";

const GSAPReact = () => {
    const [pState, setPState] = useState(PlayState.stop);
    const move = () => setPState(PlayState.play);

    return (
        <section>
            <hr />
            <h2>GSAP con React</h2>

            <h3>Con componente Controls</h3>
            <Controls playState={PlayState.stop}>
                <Tween
                    to={{ x: '200px', rotation: 180 }}
                    duration={2}
                    ease="elastic.out(0.9, 0.1)"
                >
                    <div className='square2' />
                </Tween>
            </Controls>

            <h3>Fatto a manina</h3>
            <Tween
                to={{ x: '200px', rotation: 180 }}
                duration={2}
                ease="elastic.out(0.9, 0.1)"
                playState={pState}
            >
                <div className='square2' />
            </Tween>

            <button onClick={move}>Move square</button>
        </section>
    );
};

export default GSAPReact;