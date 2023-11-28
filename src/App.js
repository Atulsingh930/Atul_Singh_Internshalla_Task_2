import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';

function App() {

    const [resultData, setResultData] = useState([]);
    const [profileCard, setProfileCard] = useState({});
    const [loading, setLoading] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const result = async() => {
        setLoading(true);
        const data = await axios({
            method: 'get',
            url: 'https://602e7c2c4410730017c50b9d.mockapi.io/users',
        });

        if(data){
            setResultData(data.data.reverse());
            setProfileCard(data.data[0]);
        }
        setLoading(false);
    };

    useEffect(()=>{
        result();
    }, []);
    // Card Color : #231e39

  return (
    loading ? (<div className=' w-full min-h-screen flex justify-center items-center overflow-y-auto'><div className='loader'></div></div>) : (
        <div className="bg-[#f3f2f9] w-full min-h-screen overflow-y-auto p-8 text-black">
        <div className='w-full flex justify-around items-start max-lg:relative'>
            <div className='lg:w-2/5 md:w-[50%] w-full flex flex-col gap-4'>
                {
                    resultData?.map((data, index)=>(
                        <Card setShowProfile={setShowProfile} setProfileCard={setProfileCard} profileCard={data} selectedKey={profileCard.id}/>
                    ))
                }
            </div>
            {showProfile && (<div className='lg:hidden absolute bg-opacity-10 transition-all duration-500 -top-8 -left-8 backdrop-brightness-50 z-10 h-screen w-screen grayscale-0'></div>)}
            <div className='w-2/5 max-lg:absolute max-lg:w-screen max-lg:bottom-0'>
                <ProfileCard showProfile={showProfile} setShowProfile={setShowProfile} profileCard={profileCard}/>
            </div>
        </div>
    </div>
    )
  );
}

export default App;
