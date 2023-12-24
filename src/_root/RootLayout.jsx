import Reactm, {useState} from 'react'
import Topbar from '../components/shared/Topbar'
import Bottombar from '../components/shared/Bottombar'
import { Outlet } from 'react-router-dom'
import AnsCard from '../components/AnsCard'


export const RootLayout = () => {
  const [answers, setAnswers] = useState([]);

  const addAns = (newAnswer) => {
    setAnswers(prevAnswers => {
      return [...prevAnswers, newAnswer]
    });
  }


  return (
    <div className='grid'>
      <Topbar />
      <div className='w-full grid justify-items-center'>
        <div className='mt-20 w-7/12'>
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
