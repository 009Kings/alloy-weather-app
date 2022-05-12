import { useState } from "react";

const Signup = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState(null)

  let submit = e => {
    e.preventDefault()
    if (password !== confirm) {
      setError('Passwords must match')
      return
    }

    fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password}),
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
      <h3>Signup</h3>
      {error ? <p className="error">{error}</p> : null}
      <form onSubmit={submit}>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        <input type="password" placeholder="Confirm password" onChange={e => setConfirm(e.target.value)}/>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

export default Signup;