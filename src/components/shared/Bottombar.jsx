import React, { useEffect, useRef, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { LucideLoader } from 'lucide-react';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GEMINI_API_KEY);



const Bottombar = (props) => {
  const formRef = useRef();
  
  const [form, setForm] = useState({
    prompt:'',
  });
  
  const [output, setOutput] = useState({
    prompt: '',
    answer: '',
  })
  
  useEffect(() => {
    if(output.answer != ''){
      props.onAdd(output);
    }
  },[output.answer])
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name , value} = e.target;

    setOutput({
        ...output,
        [name]: value,
    })
  }

  async function fetchAnswer (e){
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContent(e);
    const response = result.response;
    const ans = response.text();
    setOutput({
      ...output,
      answer: ans,
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const promptValue = e.target.prompt.value;
    console.log(promptValue);
    
    await fetchAnswer(promptValue);
    
    
    setLoading(false);

  }

  return (
    <section className='bottombar'>
      
      <div className='w-full flex-between py-1 px-5 font-bold'>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full m-5 flex gap-4"
        >
          <input 
            type='text'
            name='prompt'
            value={form.name}
            onChange={handleChange}
            placeholder='Enter prompt here...'
            className="bg-tertiary w-full py-0 px-10 placeholder:text-neutral-700 text-neutral-950 text-xl rounded-lg outline-none border-none font-medium"
          />
          <button
            type='submit'
            className="bg-tertiary py-4 px-4 outline-none w-fit font-bold shadow-primary rounded-full bg-white"
          >
            {loading ? 
              <LucideLoader className='h-10 w-10 text-slate-950'/>:
              <img 
                src='/assets/images/send.png'
                className='h-15 w-15'
              />
            }
          </button>
        </form>
        </div>
    </section>
  )
}


export default Bottombar