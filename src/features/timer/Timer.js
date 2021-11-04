import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOffset, getTimeAsync, selectTime, setOffset } from './timerSlice';
import ReactDOM from 'react-dom';
export function Timer(){

    const dispatch = useDispatch();
    const offset = useSelector(selectOffset);
    const [state, setState] = useState(0);

    useEffect(()=>{setInterval(()=>setState(1+state), 500)})
    
    function getDateString(){

        dispatch(setOffset)


        return new Date().toString();
    }


    return (<div>
      {getDateString()}
    </div>);
}