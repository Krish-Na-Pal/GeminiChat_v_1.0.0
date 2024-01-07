import {useEffect, useState} from 'react'
import Topbar from '../components/shared/Topbar'
import Bottombar from '../components/shared/Bottombar'
import AnsCard from '../components/AnsCard'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import toast from 'react-hot-toast'

export const RootLayout = () => {
  // const [prompt, setPrompt] = useState();
  const [answers, setAnswers] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token){
      const user = decodeToken(token);
      if(!user){
        localStorage.removeItem('token');
        navigate('/sign-in');
      }
      setUser(user);
    }else{
      navigate('/sign-in')
    }
  },[])

  const addAns = async(newAnswer) => {
    try {
      const response = await fetch("http://localhost:3001/api/userprompt",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user,
          newAnswer,
        })
      })
      const data = await response.json();

      if(!data) throw Error;
      toast.success("Data sended...")
    } catch (error) {
      toast.error("server not responding...");
    }finally{
          setAnswers(prevAnswers => {
            return [...prevAnswers, newAnswer]
          });
    }    
  }


  return (
    <div className='grid'>
      <Topbar props = {user.username}/>
      <div className='w-full grid justify-items-center pb-20'>
        <div className='mt-20 md:w-7/12 w-11/12'>
              {answers.length == 0?
              <div className='mt-32'>
                <h1 className='h1-bold grid justify-items-center'>How can i help you?</h1>
                <h1 className='text-lg font-semibold grid justify-items-center'>This is just tryle version...</h1>
              </div>
              :
              answers.map((answerItem, index) => {
                return (
                  <AnsCard 
                    key={index}
                    id={index}
                    prompt={answerItem.prompt}
                    answer={answerItem.answer}
                  />
                );
              })}
          </div>
          <div className='grid justify-items-center'>
            <Bottombar onAdd={addAns}/>
          </div>
      </div>
    </div>
  )
}
