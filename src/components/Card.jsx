import React, { useState } from 'react'
import profileImage from '../asstes/profileImage.svg'


function Card({profileCard, setProfileCard, selectedKey, setShowProfile}) {
    const [imageProfile, setImageProfile] = useState(profileCard?.avatar);
    function toggleClick(){
        setProfileCard(profileCard);
        setShowProfile(true);
    }
  return (
    <div onClick={toggleClick} key={profileCard?.id} className={`${selectedKey === profileCard?.id ? 'bg-neutral-50 lg:scale-105' : ''} flex items-center gap-4 rounded-lg bg-white w-full px-6 py-6 relative transition-all duration-200 shadow-[0px_3px_20px_1px_rgba(212,_212,_212,_1)] lg:hover:scale-105 cursor-pointer box-border`}>
        <img onError={()=>setImageProfile(profileImage)} className='rounded-full w-20' src={imageProfile} alt="userImage" />
        <div className='flex flex-col items-start'>
            <p className='font-semibold text-lg text-[#13142b]'>{`${profileCard?.profile?.firstName} ${profileCard?.profile?.lastName}`}</p>
            <p className='text-sm text-[#93939e]'>{`@ ${profileCard?.profile?.username}`}</p>
        </div>
    </div>
  )
}

export default Card