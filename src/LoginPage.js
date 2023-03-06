/*import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Validate user input and make a request to the server to check if the user is authorized

    // Redirect to main page if authorized
    history.push('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;*/


