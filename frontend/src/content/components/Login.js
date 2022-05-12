import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  let submit = e => {
    e.preventDefault()
    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })
    .then(response => response.json())
    .then(
      (response) => {
        console.log(response)
        localStorage.setItem('weatherUser', JSON.stringify(response))
        props.setAuthed(true)
      },
      (error) => {
        console.log(error)
        setError(typeof error === 'string' ? error : 'Something went wrong!')
      }
    );
  }

  return (
    <section>
      <h3>Login</h3>
      {error ? <p className="error">{error}</p> : null}
      <form onSubmit={submit}>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;