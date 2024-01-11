import { useEffect, useState } from 'react'
import Topbar from '../components/shared/Topbar'
import AnsCard from '../components/AnsCard'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import toast, { LoaderIcon } from 'react-hot-toast'
import { ListMusic, Loader, LucideActivity, LucideAirplay, LucideAlertCircle, LucideAlignJustify, LucideArrowBigLeft, LucideArrowBigRightDash, LucideArrowDown10, LucideArrowUpWideNarrow, LucideAxis3D, LucideAxis3d, LucideBaby, LucideBarcode, LucideDiamond, LucideEarOff, LucideEraser, LucideFigma, LucideHopOff, LucideLoader2, LucideMessageSquareOff, LucideNutOff, LucidePinOff, LucideTrees, LucideYoutube, LucideZapOff } from 'lucide-react'

export const HistoryLayout = () => {
    // const [prompt, setPrompt] = useState();
    const [answers, setAnswers] = useState([]);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = decodeToken(token);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/sign-in');
            }
            setUser(user);
        } else {
            navigate('/sign-in')
        }

        async function fetchData() {
            try {
                const response = await fetch("https://geminichatserver.cyclic.app/api/fetchdata", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user
                    })
                });
                const data = await response.json();
                setAnswers(data.data);
                if (!data) throw Error;
            } catch (error) {
                toast.error("server not responding...");
            }
        }
        fetchData();
    }, [])


    return (
        <div className='grid'>
            <Topbar props={user.username} />
            <div className='w-full grid justify-items-center pb-20'>
                <div className='mt-20 md:w-7/12 w-11/12'>
                    {answers.length == 0 ?
                        <div className='mt-32'>
                            <h1 className='h1-bold grid justify-items-center'>History?</h1>
                            <h1 className='text-lg font-semibold grid justify-items-center'>This page is on building...</h1>
                            <div className='font-semibold grid justify-items-center'> <LucideMessageSquareOff /></div>
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
            </div>
        </div>
    )
}
