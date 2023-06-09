import axios from "axios";
import { useEffect, useState } from "react";
import {register,handleSubmit, useForm} from 'react-hook-form';

const ChatComponent=()=>{
    const{register,handleSubmit}=useForm();

    const [data,setData]=useState([]);
    const [update,setUpdate]=useState('');

const getdata=async(user)=>{

    let {data}=await axios.get(`http://localhost:5000/${user}`);
    setData(data);
    console.log(data);
}

const setdata=async(msgdata)=>{

    let {data}=await axios.post(`http://localhost:5000/create`,{data:{"user":"sharvil", "message":msgdata.message, "time":new Date()}})
    console.log(data);
    setUpdate(data);
}
useEffect(()=>{
    getdata('sharvil')
},[])

useEffect(()=>{
    getdata('sharvil');
},[update])
    return(
        <div>
            <form onSubmit={handleSubmit(setdata)}>
                <input type="text" {...register('message')}/>
                <button type="submit">Send</button>
            </form>
            <ul style={{"listStyleType":"none"}}>
            {data.length>0?
            data.map((msg)=><li> {msg.message}</li>)
            :"Loading"}       

            </ul>
        </div>
    )

}


export default ChatComponent;