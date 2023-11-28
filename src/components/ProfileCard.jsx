import React from 'react';
import profileImage from '../asstes/profileImage.svg'
import { RxCross2 } from "react-icons/rx";


function ProfileCard({profileCard, showProfile, setShowProfile}) {

    let profilimage = profileCard?.avatar;
    console.log(profileCard);
    if(profileCard?.avatar?.split('/')[2]==='cdn.fakercloud.com'){
        profilimage = profileImage
    }
  return (
    <div className={`flex flex-col items-center gap-6 px-4 lg:py-24 py-20 transition-all max-lg:z-10 duration-500 rounded-lg bg-white fixed lg:top-8 top-[22rem] max-lg:bottom-0 lg:w-2/6 w-full shadow-[0px_3px_20px_1px_rgba(212,_212,_212,_1)] ${showProfile ? 'max-lg:translate-y-0' : 'max-lg:translate-y-[40rem]'}`}>
        <RxCross2 onClick={()=>setShowProfile(false)} className='text-3xl text-[#141f64] lg:hidden cursor-pointer absolute top-4 right-4' />
        <img src={profilimage} className='rounded-full p-1.5 border-[3px] border-[#13142b]' alt="" />
        <div className='flex flex-col gap-2 items-center'>
            <div className='flex flex-col items-center'>
                <p className='text-2xl font-semibold text-[#101129]'>{`${profileCard?.profile?.firstName} ${profileCard?.profile?.lastName}`}</p>
                <p className='text-sm text-neutral-700'>{profileCard?.profile?.username}</p>
            </div>
            <p className='text-lg text-[#202138] font-medium'>{profileCard?.jobTitle}</p>
            <p className='text-[#202138] whitespace-wrap text-center w-full'>{profileCard?.Bio}</p>
        </div>
        <button className={`px-6 py-2 transition-all duration-2000 bg-[#141f64] text-white rounded-lg hover:scale-95`}>
            {profileCard?.profile?.email}
        </button>
    </div>
  )
}

export default ProfileCard