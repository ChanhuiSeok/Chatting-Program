import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom'

function RegisterPage(props) {

    const dispatch = useDispatch();

    // props , state -> 이 안에서는 state 를 변화시켜서 이 안의 데이터를 변화시킬 수 있음
    // 입력한 이메일과 비밀번호를 서버에 넘길 수 있도록 state 에서 받고 있음
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onconfirmPasswordHandler = (event) => {
        setconfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 아무 동작 안하고 버튼만 눌러도 리프레쉬 되는 것을 막는다

        if(Password !== confirmPassword){
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name,
        }
        dispatch(registerUser(body))
            .then(response =>{
                if(response.payload.success){
                    props.history.push('/login') // react 에서의 페이지 이동 코드
                } else{
                    alert('Error!!');
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
                
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={onconfirmPasswordHandler} />
                
                <br />
                <button>
                    회원가입
                </button>
            </form>

        </div>
    )
}

export default withRouter(RegisterPage);
