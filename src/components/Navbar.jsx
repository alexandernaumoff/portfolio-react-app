import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaXingSquare, FaCodepen } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { useTranslation } from "react-i18next"
import i18n from "i18next"



function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const { t } = useTranslation()
    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'us'
        },
        {
            code: 'de',
            name: 'Deutsch',
            country_code: 'de'
        },
    ]
    return (
        <div className='fixed w-full h-[80px]  bg-[#0a192f] text-gray-300 z-30'>
            <div className='flex justify-between items-center w-full max-w-[1240px] mx-auto px-8 py-4'> 
            <Link to="home" smooth={true} duration={500}>
                <img src={Logo} alt="Logo image" style={{ width: '100px' }} />
            </Link>
            {/* language switcher */}

            <div className="flex justify-end mr-6 basis-9/12 md:basis-1/2">
                <div>
                    <div className="relative">
                        <button
                            className="flex items-center whitespace-nowrap rounded-sm bg-transparent px-6 pt-2.5 pb-2 w-[130px] justify-between text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-900 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                            type="button"
                            id="dropdownMenuButton1d"
                            data-te-dropdown-toggle-ref
                            aria-expanded="false"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <span>{t("language")}</span>
                            <span className="ml-2 w-2">
                                <svg
                                    
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <ul
                            className="absolute z-[1000] w-[130px] text-center float-left m-0 hidden min-w-max list-none overflow-hidden rounded-sm border-none bg-white bg-clip-padding text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton1d"
                            data-te-dropdown-menu-ref>
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code} className="px-0">
                                <button
                                    onClick={() => i18n.changeLanguage (code)}
                                    className={`${country_code} flex items-center justify-start w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
                                >{name}</button>
                            </li>
                            ))}
                            
                            <hr
                                className="h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
                        </ul>
                    </div>
                </div>
            </div>
            {/* menu */}
            <ul className='hidden md:flex basis-2/5 justify-between whitespace-nowrap'>
                <li>
                    <Link activeClass="active" to="home" smooth={true} duration={500}>
                        {t('home')}
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                    {t('about')}
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                    {t('skills')}
                    </Link>
                </li>
                <li>
                    <Link to="works" smooth={true} duration={500}>
                    {t('works')}
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                    {t('contact')}
                    </Link>
                </li>
            </ul>
            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {/* {!nav ? <FaBars /> : <FaTimes />} */}
                <div className={`hamburger-icon block w-6 h-6 z-50 after:bg-white before:bg-white after:rounded-[1px] before: rounded-[1px] after:block before:block after:h-[3px] before:h-[3px] after:my-[5px] before:my-[5px] after:duration-300 before:duration-300 after:content-[''] before:content-[''] ${!nav ? "" : "open"}`}>
                    <div className='bg-white rounded-[1px] block h-[3px] my-[5px] duration-300 content-[""]' />
                    </div>
            </div>
            {/* mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>
                    {t('home')}
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    {t('about')}
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    {t('skills')}
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="works" smooth={true} duration={500}>
                    {t('works')}
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    {t('contact')}
                    </Link>
                </li>
            </ul>
            {/* social icons */}
                <ul className='hidden fixed right-0 top-0 h-full lg:flex flex-col justify-center items-end'>
                    <li className='flex justify-between items-center w-[150px] h-[50px] mr-[-100px] px-[13px] hover:mr-[-5px] duration-300 bg-[#0A66C2]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://linkedin.com/in/alexandernaumov68" target="_blank"><FaLinkedin size={25} /> LinkedIn</a>
                    </li>
                    <li className='flex justify-between items-center w-[150px] h-[50px] mr-[-100px] px-[13px] hover:mr-[-5px] duration-300 bg-[#0698A0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.xing.com/profile/Alexander_Naumov5" target="_blank"><FaXingSquare size={25} /> Xing</a>
                    </li>
                    <li className='flex justify-between items-center w-[150px] h-[50px] mr-[-100px] px-[13px] hover:mr-[-5px] duration-300 bg-[#8892B0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://codepen.io/lagudal" target="_blank"><FaCodepen size={25} /> Codepen</a>
                    </li>
                    <li className='flex justify-between items-center w-[150px] h-[50px] mr-[-100px] px-[13px] hover:mr-[-5px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/magefactory" target="_blank"><FaGithub size={25} /> Github</a>
                    </li>
                    <li className='flex justify-between items-center w-[150px] h-[50px] mr-[-100px] px-[13px] hover:mr-[-5px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:alex@alexander-naumov.com"><HiOutlineMail size={25} /> Email</a>
                    </li>
                    <li className='flex justify-between items-center w-[150px] h-[50px] mr-[-100px] px-[13px] hover:mr-[-5px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://demo.alexander-naumov.com/data/resume.pdf" target="_blank"><BsFillPersonLinesFill size={25} /> Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar