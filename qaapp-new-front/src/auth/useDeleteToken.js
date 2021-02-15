import {useState} from 'react';

export default function useDeleteToken(token){
    const getToken = () => {
        return token
    }
    const [del_token, setDelToken] = useState(getToken());

    const deleteToken = (userToken) => {
        localStorage.removeItem('token');
        setDelToken(userToken, del_token);
    }
    return {
      setDelToken: deleteToken,
      del_token,
    }
}