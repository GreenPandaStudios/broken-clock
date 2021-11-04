import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOffset, getTimeAsync, selectTime, setOffset } from './timerSlice';
import ReactDOM from 'react-dom';
export function Timer(){

    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);
    

    const [state, setState] = useState(0);

    useEffect(()=>{
        setInterval(()=>setState(1+state), 500);
        
        
    });
    useEffect(()=>{
        if (Math.random() > 0.5){
            setOffset(0);
        }
        else{
            setOffset(Math.random() * 9999999);
        }
        
    }, []);
    


    function getDateString(){

        

        let date  = new Date();
        date.setMinutes(date.getMinutes() + offset % 60);
        date.setSeconds(date.getSeconds() + (offset * 1.2) % 60);
        date.setMonth(date.getMonth() + (offset * 5.6) % 12);
        date.setFullYear(date.getFullYear() + (offset * 5.6) % 100);


        return date.toLocaleString();
    }
    

    return (<div>
      {getDateString()}
    </div>);
}