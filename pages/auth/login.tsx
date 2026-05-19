import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <h2>Iniciar sesión</h2>
      <form>
        <label>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="button">Entrar</button>
      </form>
    </div>
  );
}
