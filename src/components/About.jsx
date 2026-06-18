import React from 'react'
import Card from '../assets/card3.jpg'
import  { useTranslation } from "react-i18next"

const About = () => {
    const { t } = useTranslation()
    return (
        <div name='about' className='w-full h-screen min-h-screen px-8 text-gray-300 bg-[#0a192f]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1240px] w-full grid grid-cols-2 gap-8 px-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>{t('about')}</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='max-w-[1240px] w-full grid md:grid-cols-2 gap-8 px-8 md:px-0'>
                    <div className='mx-auto sm:text-right sm:ml-auto md:mr-5 text-4xl font-bold max-w-md w-full '>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, neque?</p> */}
                        <img src={Card} />
                    </div>
                    <ul className='about_text_list list-disc'>
                        <li className='my-3 text-base'> {t('about_text_1')}</li>
                        <li className='my-3 text-base'> {t('about_text_2')}</li>
                        <li className='my-3 text-base'> {t('about_text_3')}</li>
                        <li className='my-3 text-base'> {t('about_text_4')}</li>
                        <li className='my-3 text-base'> {t('about_text_5')}</li>
                        <li className='my-3 text-base'> {t('about_text_6')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About