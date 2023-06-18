import React,{useState} from 'react';
import { Formik, Field, Form } from "formik";
import { AiFillApple, AiOutlineGoogle,AiFillAndroid,AiOutlineAlibaba} from "react-icons/ai";
import Icon from './Icon';

const SignInForm = ()=> {
    const [icon, setIcon] = useState("");

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username.trim() === 'tekkina' && password.trim() === '12345') {
      console.log('Logged in successfully');
    } else {
 
      console.log('Please fill in all the fields correctly');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <label>User Name</label>
      <input type="text" value={username} onChange={handleUsernameChange} required />
      <label>Password</label>
      <input type="text" value={password} onChange={handlePasswordChange} required />
      <button type="button" className="button" onClick={handleLogin}>
        Login
      </button>
   <Formik
        initialValues={{
            picked: ""
                }}
                onSubmit={async (values) => {
                    setIcon(values.picked);
                }}>

                {({ values }) => (
                    <Form>
                        <div id="my-radio-group"><h1>Select your work place</h1></div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="picked" value="Apple" />
                                <AiFillApple />
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="Google" />
                                <AiOutlineGoogle />
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="Android" />
                                <AiFillAndroid />
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="Alibaba" />
                                <AiOutlineAlibaba />
                            </label>
                        </div>
                        <button className="button" type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            You work at:{icon}
        </div>
    );
}
export default SignInForm;