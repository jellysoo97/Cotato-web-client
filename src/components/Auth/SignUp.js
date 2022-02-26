import React, { useState, useEffect, useCallback } from 'react';
import "./Auth.css"
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthTitle, AuthBox, AuthBox2, AuthButton } from "./AuthCommon"

function SignUp({ history }, props) {

  const [name, setName] = useState('');
  const [id, onChangeId, setId] = useState("")
  const [pwd, onChangePwd, setPwd] = useState('')
  const [email, onChangeEmail, setEmail] = useState("")
  const onChangeName = (e) => {
    setName(e.currentTarget.value);
  };
  console.log('name: '+name)

  // 해당하는 err 발생 시 errMsg 띄워주기
  const [ErrorMsg, setErrorMsg] = useState({idErr: "", pwdErr: "", emailErr: "",})
  const { idErr, pwdErr } = ErrorMsg

  // 정규표현식으로 validation 확인
  const inputRegexs = {
    idReg: /^[A-za-z0-9]{5,15}$/g,
    pwdReg: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
  };

  const validationCheck = useCallback(
    (input, regex) => {
      let isValidate = false;
      if (input === '') {
        isValidate = false;
      } else if (regex.test(input)) {
        isValidate = true;
      } else {
        isValidate = false;
      }
      return isValidate;
    },
    [pwd, id]
  );

  const onReset = useCallback(() => {
    setName('');
    setId('');
    setPwd('');
    setEmail('');
  }, [setName, setId, setPwd, setEmail]);

  // 아이디 체크
  useEffect(() => {
    if (validationCheck(id, inputRegexs.idReg) || id === '') {
      setErrorMsg({
        ...ErrorMsg,
        idError: '',
      });
    } else {
      setErrorMsg({
        ...ErrorMsg,
        idError: '아이디는 영문 또는 숫자로 5~15자 이여야 합니다.',
      });
    }
  }, [id]);

  // 비밀번호 체크
  useEffect(() => {
    if (validationCheck(pwd, inputRegexs.pwdReg) || pwd === '') {
      setErrorMsg({
        ...ErrorMsg,
        pwdError: '',
      });
    } else {
      setErrorMsg({
        ...ErrorMsg,
        pwdError:
          '비밀번호는 최소 하나의 문자 및 하나의 숫자로 8자 이상이여야 합니다.',
      });
    }
  }, [pwd]);

  const onSignUp = (e) => {
    e.preventDefault();

    console.log(name);
    console.log('id: ' + id);
    console.log('pwd: ' + pwd);
    console.log('email: ' + email);

    if (!id || !pwd) {
      alert('모든 값을 정확하게 입력해주세요');
      return;
    }

    if (idErr) {
      alert('아이디가 형식에 맞지 않습니다');
      return;
    } else if (pwdErr) {
      alert('비밀번호가 형식에 맞지 않습니다');
      return;
    }

    alert('회원 가입 완료');
    history.push('/');
    onReset();
  };

  return (
    <div className="AuthBigBox">
      <article className="card-body">
        <AuthTitle title={'회원가입'} />
        <AuthBox
          label={'name'}
          text={'이름'}
          warning={'이름을 입력해주세요'}
          icon={faUser}
          placeholder={'이름'}
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
