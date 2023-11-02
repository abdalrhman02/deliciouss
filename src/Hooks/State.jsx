import { useState } from "react";

function State() {

    let titles = ['sodesos moq lio fo' , 'fordg hater sodo tak' , 'ranelo uelo weklo' , 'sava yolio fomo' , 'lomapormeli hooh'];

    const [titleNum , setTitleNum] = useState(1)

    const nextTitle = () => {
        if(titleNum === titles.length) {
            console.log("ITS THE LAST TITLE!")
        } else {
            setTitleNum(titleNum + 1)
        }
    }

    const prevTitle = () => {
        if(titleNum === 1) {
            console.log("THERE IS NO TITLE BEFORE THIS...")
        } else {
            setTitleNum(titleNum - 1)
        }
    }
    
    return (
        <>
            <button id="nextBtn" onClick={nextTitle}>+</button>
            <button id="prevBtn" onClick={prevTitle}>-</button>

            <div style={{display: 'flex'}}>
                <h1 id='numberOfTitle'>{titleNum}</h1>
                <h2>{titles[titleNum - 1]}</h2>
            </div>
        </>
    )
}

export default State;