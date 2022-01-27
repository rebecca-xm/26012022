import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const GSAPRef = () => {
    // const arr = [1, 2, 3, 4];
    const [duration, setDuration] = useState(2);
    const square1 = useRef();

    const move = () => {
        const anim = gsap.to(square1.current, {
            duration: duration,
            x: 300,
            onComplete: () => anim.reverse(),
        });
    };

    useEffect(() => {
        const anim = gsap.to(square1.current, {
            duration: duration,
            x: 300,
            onComplete: () => anim.reverse(),
        });
    }, [duration]);

    const slider = (event) => setDuration(parseInt(event.target.value));

    return (
        <section>
        <hr />
            <h2>GSAP in React con useRef</h2>

            <input type='number' min='1' max='10' step='1' value={duration} onChange={slider} />
            <button onClick={move}>Move square</button>
            <div className='square2' ref={square1}>
                {/* {arr.map((e) => (
                    <li key={e}>{e}</li>
                ))} */}
            </div>
        </section>
    );
};

export default GSAPRef;

// grazie a ref posso fare un bind
// senza bisogno del queryselector

// NOTA: mixare un elemento statico con elementi dinamici
// generati da React potrebbe causare dei problemi
