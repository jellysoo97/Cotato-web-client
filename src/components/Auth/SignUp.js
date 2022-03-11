import React, { useState, useCallback } from 'react';
import "./Auth.css"
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthTitle, AuthBox, AuthBox2, AuthButton } from "./AuthCommon"

function SignUp({ history, onSignUp }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');

  //
  const onChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const onChangeId = (e) => {
    setId(e.currentTarget.value);
  };

  const onChangePwd = (e) => {
    setPwd(e.currentTarget.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onReset = useCallback(() => {
    setName('');
    setId('');
    setPwd('');
    setEmail('');
  }, [setName, setId, setPwd, setEmail]);

  const onSubmit = (e) => {
    e.preventDefault();
    
    console.log('name: ' + name);
    console.log('id: ' + id);
    console.log('pwd: ' + pwd);
    console.log('email: ' + email);
    

    onSignUp(name, id, pwd, email);

    // history.push('/');
    onReset();
  };

  return (
    <div className="AuthBigBox position-absolute top-50 start-50 translate-middle">
      <div>
        <form
          // style={{ display: 'flex', flexDirection: 'column' }}
          className="auth-form"
          onSubmit={onSubmit}
        >
          <article className="card-body">
            <AuthTitle title={'회원가입'} />
            {/* <label>name</label> */}
            <input
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={onChangeName}
              className="form-control"
            />
            {/* <label>ID</label> */}
            <input
              type="text"
              name="id"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={onChangeId}
              className="form-control"
            />
            {/* <label>Password</label> */}
            <input
              type="password"
              name="pwd"
              placeholder="비밀번호를 입력하세요"
              value={pwd}
              onChange={onChangePwd}
              className="form-control"
            />
            {/* <label>Email</label> */}
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={onChangeEmail}
              className="form-control"
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary mt-3 mb-3"
              style={{ width: '310px' }}
            >
              회원 가입
            </button>
          </article>
        </form>
      </div>

      {/* <AuthTitle title={'회원가입'} />
        <button onChange={onChangeName} onClick={temp}>aa</button>
        <AuthBox
          label={'name'}
          text={'이름'}
          warning={'이름을 입력해주세요'}
          icon={faUser}
          placeholder={'이름'}
          isName={true}
          // onChange={onChangeName}
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
        </div> */}
    </div>
  );
}

export default SignUp;
