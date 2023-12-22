import React from 'react'

const Home = (props) => {
  return (
    <>
    <div className='mt-20 p-10'>
    
            {props.map((answerItem, index) => {
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
    </>
  )
}

export default Home