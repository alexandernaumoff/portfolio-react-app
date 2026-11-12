import React from 'react'
import { useTranslation } from "react-i18next"

const Contact = () => {
  const { t } = useTranslation()
  return (
    <div name='contact' className='bg-[#0a192f] w-full min-h-screen flex justify-start items-end p-4 pt-20' >
        <form method='POST' action="https://public.herotofu.com/v1/c13f8720-debc-11f1-8f8e-55600c340e2e" className='flex flex-col max-w-[600px] w-full mx-auto'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>{t('contact')}</p>
                <p className='text-gray-300 py-4'>// {t('contact_msg')}</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' required/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder={t('email')} name='email' required/>
            <textarea name="message" className='p-2 bg-[#ccd6f6]' rows="10" placeholder={t('message')} required></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex items-center'>{t('submit_button')}</button>
        </form>
    </div>
  )
}

export default Contact