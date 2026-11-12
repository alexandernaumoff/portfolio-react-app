import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import { useTranslation } from "react-i18next"

const Thanks = () => {
    const { t } = useTranslation()
    return (
        <div name='thanks' className='w-full min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-8'>
            <div className='max-w-[600px] text-center'>
                <FaCheckCircle className='mx-auto text-green-500 mb-6' size={80} />
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>{t('thanks_title')}</p>
                <p className='py-6 text-lg'>{t('thanks_message')}</p>
                <Link to='/' className='inline-block text-white border-2 border-pink-600 hover:bg-pink-600 px-6 py-3 duration-300'>
                    {t('back_home')}
                </Link>
            </div>
        </div>
    )
}

export default Thanks
