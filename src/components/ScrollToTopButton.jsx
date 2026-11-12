import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { useTranslation } from "react-i18next"

const ScrollToTopButton = () => {
    const { t } = useTranslation()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 700)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            type='button'
            onClick={scrollToTop}
            aria-label={t('to_top')}
            title={t('to_top')}
            className={`fixed bottom-6 right-6 z-40 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-lg border-2 border-pink-600 bg-[#0a192f] text-gray-300 shadow-md shadow-[#040c16] hover:bg-pink-600 hover:text-white duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <FaArrowUp size={18} />
        </button>
    )
}

export default ScrollToTopButton
