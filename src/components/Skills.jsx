import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import JavaScript from '../assets/javascript.png'
/* import ReactImg from '../assets/react.png' */
import Node from '../assets/node.png'
import Gulp from '../assets/gulp.png'
/* import AWS from '../assets/aws.png' */
import GitHub from '../assets/github.png'
import Grunt from '../assets/grunt.png'
import Less from '../assets/less.png'
import Sass from '../assets/sass.png'
import Svg from '../assets/svg.png'
import Webpack from '../assets/webpack.png'
import Magento from '../assets/magento.png'
import { useTranslation } from "react-i18next"

const Skills = () => {
    const { t } = useTranslation()
    return (
        <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-20'>
            { /* container */}
            <div className='max-w-[1240px] mx-auto px-8 flex justify-center items-center flex-col w-full h-full'>
                <div className=''>
                    <div className='max-w-[1240px] w-full grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>{t("skills")}</p>
                        </div>
                    </div>
                    <div></div>
                    <p className='py-4'>// {t('skills_msg')}
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Svg} alt="SVG icon" />
                        <p className='my-4'>SVG</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Magento} alt="Magento icon" />
                        <p className='my-4'>Magento</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Less} alt="Less icon" />
                        <p className='my-4'>Less</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Sass} alt="Sass icon" />
                        <p className='my-4'>Sass</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>Tailwind CSS</p>
                    </div>
                    {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>React JS</p>
                    </div> */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='my-4'>Node JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Gulp} alt="Gulp icon" />
                        <p className='my-4'>Gulp</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Grunt} alt="Grunt icon" />
                        <p className='my-4'>Grunt</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Webpack} alt="Webpack icon" />
                        <p className='my-4'>Webpack</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills