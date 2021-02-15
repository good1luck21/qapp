import {useState} from 'react';

function useUser(dataUser){
    const [locname, setState] = useState(dataUser);
    const setLocalName = (newName) => {
        setState(newName)
    }
    return [locname, setLocalName]
}

export default useUser;