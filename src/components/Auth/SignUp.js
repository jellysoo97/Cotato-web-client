import React, { useState, useEffect, useCallback, useContext } from 'react';
import "./Auth.css"
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthTitle, AuthBox, AuthBox2, AuthButton } from "./AuthCommon"

function SignUp({ history }, props) {

  const [name, setName] = useState('');
  const [id, onChangeId, setId] = useState("")
  const [pwd, onChangePwd, setPwd] = useState('')
  const [email, onChangeEmail, setEmail] = useState("")

  //
  const onChangeName = (e) => {
    setName(e.currentTarget.value);
  };
  // console.log('name: '+name)
  



  // 해당하는 err 발생 시 errMsg 띄워주기
  const [ErrorMsg, setErrorMsg] = useState({idErr: "", pwdErr: "", emailErr: "",})
  const { idErr, pwdErr } = ErrorMsg


  const onReset = useCallback(() => {
    setName('');
    setId('');
    setPwd('');
    setEmail('');
  }, [setName, setId, setPwd, setEmail]);



  const onSignUp = (e) => {
    e.preventDefault();

    console.log(name);
    console.log('id: ' + id);
    console.log('pwd: ' + pwd);
    console.log('email: ' + email);


    alert('회원 가입 완료');
    history.push('/');
    onReset();
  };

  return (
    <div className="AuthBigBox">
      <article className="card-body">
        <AuthTitle title={'회원가입'}  />
        <AuthBox
          label={'name'}
          text={'이름'}
          warning={'이름을 입력해주세요'}
          icon={faUser}
          placeholder={'이름'}
          isName={true}
          onChange={onChangeName}
          
        />

        
        <AuthBox
          label={'id'}
          text={'아이디'}
          warning={'아이디를 입력해주세요'}
          icon={faUser}
          placeholder={'아이디'}
          
          onChange={onChangeId}
        />
        <AuthBox2
          label={'pw'}
          text={'비밀번호'}
          warning={'비밀번호를 입력해주세요'}
          icon={faLock}
          placeholder={'비밀번호'}
          onChange={onChangePwd}
        />
        <AuthBox
          label={'email'}
          text={'이메일'}
          warning={'이메일을 입력해주세요'}
          icon={faEnvelope}
          placeholder={'이메일'}
          onChange={onChangeEmail}
        />

        <div className="mt-4">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '90px', marginRight: '20px' }}
            onClick={onSignUp}
          >
            회원가입
          </button>
        </div>
      </article>
    </div>
  );
}

export default SignUp;
