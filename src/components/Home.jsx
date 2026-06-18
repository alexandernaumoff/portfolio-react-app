import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import  { useTranslation } from "react-i18next"


const Home = () => { 
  const { t } = useTranslation()
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      { /*container */}
      <div className='max-w-[1240px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 '>{t("hi_my_name_is")}</p>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6]'>Alex Naumov</h1>
        <h2 className=' text-4lx sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8892b0]'>{t("i_frontend_developer")}</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>{t('wellcome_msg')}</p>
        <div>
          <Link className='inline-block' to="works" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            {t('view_works')} 
              <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/></span>
            </button>
          </Link>
        </div> 
      </div>
    </div>
  )
}

export default Home