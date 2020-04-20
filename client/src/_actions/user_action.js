import axios from 'axios';
import {
    LOGIN_USER
} from './types'

export function loginUser(dataTosubmit) {

    // 서버쪽 라우트로 보낸다.
    const request = axios.post('/api/users/login', dataTosubmit)
        .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }

}