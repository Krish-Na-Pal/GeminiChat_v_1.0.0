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
    <div className='w-full md:grid content-between'>
      <Topbar />
      
      <section className='flex flex-1 h-3/4'>
      <div className='mt-20 p-10  w-full'>
            {answers.length == 0?
            <>
              <h1 className='h1-bold grid justify-items-center'>How can i help you?</h1>
              <h1 className=' text-lg font-semibold grid justify-items-center'>This is just tryle version...</h1>
            </>
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
      </section>

      <Bottombar onAdd={addAns}/>
    </div>
  )
}
