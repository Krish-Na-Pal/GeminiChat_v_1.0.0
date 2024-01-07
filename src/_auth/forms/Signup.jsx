import React, { useState } from 'react' 
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //Submit handler
  const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
          const response = await fetch("https://geminichatserver.cyclic.app/api/register",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name,
              username,
              email,
              password
            })
          })

          const data = await response.json();

          if(!data) throw Error;

          toast.success("User registered");
          setIsLoading(false)
          navigate("/sign-in")
        } catch (error) {
          toast.error("server not responding...");
        }
  }

  return (
    <div className='grid gap-5'> 
        <form
        //   ref={formRef}
          onSubmit={handleSubmit}
          className="grid gap-2"
        >
          <input 
            type='text'
            name='name'
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            placeholder='Name'
            autoComplete="off"
            className="p-1 rounded-sm bg-neutral-700"
            required
          />
          <input 
            type='text'
            name='username'
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
            placeholder='Username'
            autoComplete="off"
            className="p-1 rounded-sm bg-neutral-700"
            required
          />
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
            className="bg-slate-600 p-1 rounded-sm hover:bg-slate-800"
          >
            {isLoading ? 
              <p>Loading...</p>:
              <p>Sign Up</p>   
            }
          </button>
        </form>
        
        <div className='flex'>
          <p className=' text-sm font-mono'>Already have account?|</p>
          <Link  to="/sign-in" className=' text-sm font-mono font-bold hover:text-violet-400'>sign-in</Link>
        </div>
    </div>
  )
}

export default Signup