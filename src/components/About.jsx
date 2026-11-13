import React from 'react'
import Card from '../assets/card3.jpg'
import  { useTranslation } from "react-i18next"

const About = () => {
    const { t } = useTranslation()
    return (
        <div name='about' className='w-full px-8 pt-20 pb-8 text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-start items-start w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>{t('about')}</p>
                </div>
                <div className='w-full grid md:grid-cols-2 gap-8'>
                    <div className='mx-auto sm:text-right sm:ml-auto md:mr-5 text-4xl font-bold max-w-md w-full '>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, neque?</p> */}
                        <img src={Card} alt="Alexander Naumov" />
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
