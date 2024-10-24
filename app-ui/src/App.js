import { useState } from "react";
import axios from "axios";

const App=()=>{

    const[text,setText]=useState("basic text")

    return(
        <>
            <h1 onMouseEnter={async()=>{
                const data = await axios.get(`/api/`)
                setText(data.data.hai)
            }}
            onMouseLeave={async()=>{
                setText("basic text")
            }}>{text}</h1>
        </>
    )
}

export default App;