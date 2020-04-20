import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function LoginPage(props) {

    const dispatch = useDispatch();

    // props , state -> 이 안에서는 state 를 변화시켜서 이 안의 데이터를 변화시킬 수 있음
    // 입력한 이메일과 비밀번호를 서버에 넘길 수 있도록 state 에서 받고 있음
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 아무 동작 안하고 버튼만 눌러도 리프레쉬 되는 것을 막는다

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response =>{
                if(response.payload.loginSuccess){
                    props.history.push('/') // react 에서의 페이지 이동 코드
                } else{
                    alert('Error!');
                }
            })
        // 완료가 잘 되었을 경우 이동


    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>

            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>
                    Login
                </button>
            </form>

        </div>
    )
}

export default LoginPage;
