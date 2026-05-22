import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export function LoginForm(){
    const {mutate, isPending} = useLogin()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault(); 
    
    mutate({ email, password });
  };

    return(
            <form className="login-form" onSubmit={handleSubmit} >
                <div className="login-form__field">
                <label htmlFor="email">Email</label>
                <input id="email" 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                disabled={isPending} 
                required
                placeholder="admin@email.com" />
                </div>

                <div className="login-form__field">
                <label htmlFor="password">Password</label>
                <input id="password" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                disabled={isPending} 
                required
                placeholder="••••••••" />
                </div>

                <button className="login-form__button" type="submit" disabled={isPending}>
                    {isPending ? 'Signing in...' : 'Sign in'}
                </button>
          </form>
          
    )
}