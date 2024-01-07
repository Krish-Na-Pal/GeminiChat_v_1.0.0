import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://geminichatserver.cyclic.app/api/login",{ 
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        })
      })
      const data = await response.json();
      if(data.status == 'error') throw ServerError;

      localStorage.setItem('token', data.user);
      toast.success("Login Successfull");
      setIsLoading(false);
      navigate("/");
    } catch (e) {
      if(e.ServerError){
        toast.error("User not Valid");
      }else{
        toast.error("Server not responding...");
      }
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid gap-2"
      >
        <input 
            type='email'
            name='email'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder='Email'
            autoComplete="off"
            className="p-1 rounded-sm bg-neutral-700"
            required
          />
        <input 
            type='password'
            name='password'
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            placeholder='Password'
            autoComplete="off"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            className="p-1 rounded-sm bg-neutral-700"
            title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit."
            required
          />
          <button
            type='submit'
            className=" bg-slate-600 p-1 rounded-sm hover:bg-slate-800"
          >
            {isLoading ? 
              <p>Loading...</p>:
              <p>Sign Up</p>
              
            }
          </button>
      </form>
    </>
  )
}

export default Signin