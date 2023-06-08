import axios from "axios";
import { useEffect, useState } from "react";


const ChatComponent=()=>{

    const [data,setData]=useState([{message:""}]);

const getdata=async(user)=>{

    let {data}=await axios.get(`http://localhost:5000/${user}`);
    setData(data);
    console.log(data);
}
useEffect(()=>{
    getdata('Sharvil')
},[])
    return(
        // <h1>Hiii</h1>
        <h1>{JSON.stringify(data[0].message)}</h1>       
    )

}


export default ChatComponent;