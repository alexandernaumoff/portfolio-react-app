import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const Contact = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Array.from(form.elements)
      .filter((element) => element.name)
      .reduce((values, element) => ({ ...values, [element.name]: element.value }), {})

    setSending(true)
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        navigate('/thanks')
        return
      }

      HTMLFormElement.prototype.submit.call(form)
    } catch (error) {
      HTMLFormElement.prototype.submit.call(form)
    } finally {
      setSending(false)
    }
  }

  return (
    <div name='contact' className='bg-[#0a192f] w-full min-h-screen flex justify-start items-end p-4 pt-20' >
        <form method='POST' action="https://public.herotofu.com/v1/c13f8720-debc-11f1-8f8e-55600c340e2e" onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full mx-auto'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>{t('contact')}</p>
                <p className='text-gray-300 py-4'>// {t('contact_msg')}</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' required/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder={t('email')} name='email' required/>
            <textarea name="message" className='p-2 bg-[#ccd6f6]' rows="10" placeholder={t('message')} required></textarea>
            <button disabled={sending} className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex items-center disabled:opacity-50'>{t('submit_button')}</button>
        </form>
    </div>
  )
}

export default Contact