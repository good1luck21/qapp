import {useState} from 'react'

function useTestState(localitem){
    const [loc, setState] = useState(JSON.parse(localStorage.getItem(localitem)));

    function setLoc(newitem){
        newitem = JSON.stringify(newitem)
        localStorage.setItem(localitem, newitem);
        setState(newitem);
    }

    return [loc, setLoc]
}

export default useTestState;