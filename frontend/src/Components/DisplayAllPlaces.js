import axios from "axios";
import { useEffect, useState } from "react";

const DisplayAllPlaces=()=>{
    const [ places, setPlaces ] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        console.log("Trigger");
        axios.get(API + "/places")
            .then((res)=>{
                console.log(res);
            })
    }, [])


    return (
        <div>Displaying all places</div>
    )
}

export default DisplayAllPlaces;