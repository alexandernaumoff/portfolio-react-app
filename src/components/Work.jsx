import React from 'react'
import WorkItem from './WorkItem'
import SvgProject from '../assets/projects/svgProject.jpg'
import MagentoProject from '../assets/projects/magentoProject3.jpg'
import HtmlProject from '../assets/projects/htmlProject.jpg'
import FrameworksProject from '../assets/projects/frameworksProject.jpg'
import LandingProject from '../assets/projects/landingProject1.jpg'
import AnimationsProject from '../assets/projects/animationsProject.jpg'
import { useTranslation } from "react-i18next"


const Work = () => {
  const { t } = useTranslation()
  return (
    <div name='works' className='bg-[#0a192f] w-full min-h-screen text-gray-300'>
        <div className='max-w-[1240px] mx-auto px-8 flex flex-col justify-start w-full h-full'>
            <div className='pb-8 pt-20'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>{t('works')}</p>
                <p className='py-6'>// {t('work_msg')}</p>
            </div>

            {/* container */}
            <div className='grid min-[479px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* grid item */}
                <WorkItem name={t('magento_card')} desc={t('magento_desc')} bgImage={MagentoProject} codeButtonVisibility="inline-block" demoButton="Demo" demoUrl="https://magefactory.alexander-naumov.com/affirm-water-bottle.html"  codeButton="Github" codeUrl="https://github.com/magefactory/magento-2-tier-price"/>
                {/* grid item */}
                <WorkItem name={t('svg_card')} bgImage={SvgProject} codeButtonVisibility="none" demoButton="Demo" demoUrl="https://demo.alexander-naumov.com/svg-apps/" />
                {/* grid item */}
                <WorkItem name="HTML, CSS, JavaScript" bgImage={HtmlProject} codeButtonVisibility="inline-block" demoButton="Codepen" demoUrl="https://codepen.io/lagudal/pens/public" codeButton="Github" codeUrl="https://github.com/iskanderokilov"/>
                {/* grid item */}
                <WorkItem name={t("animation_card")} bgImage={AnimationsProject} codeButtonVisibility="none" demoButton={t('view')} demoUrl="https://demo.alexander-naumov.com/web-animations/" />
                {/* grid item */}
                <WorkItem name={t('frameworks_card')} bgImage={FrameworksProject} codeButtonVisibility="none" demoButton={t('show')} demoUrl="https://demo.alexander-naumov.com/frameworks/" />
                {/* grid item */}
                <WorkItem name={t('lp_card')} bgImage={LandingProject} codeButtonVisibility="none" demoButton={t('go_to')} demoUrl="https://demo.alexander-naumov.com/projects/thermotransfer/" />

            </div>
        </div>
    </div>
  )
}

export default Work