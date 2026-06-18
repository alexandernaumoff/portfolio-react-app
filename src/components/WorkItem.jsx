import React from 'react'

const WorkItem = (props) => {
    return (

        <div className='bg-transparent flip-card shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] focus:outline-0'>
            <div className='flip-card-inner relative text-center w-full h-full'>
                <div style={{ backgroundImage: `url(${props.bgImage})`}} className='flip-card-front absolute w-full h-full z-20 bg-cover bg-center bg-no-repeat'></div>
                {/* hover Effects */}
                <div className='flip-card-back absolute w-full h-full z-10 pt-4 px-4'>
                    <span className='text-2xl  text-center block font-bold text-white tracking-wider'>
                        {props.name}

                    </span>
                    <span className='text-sm pt-4 text-left text-white block'>{props.desc}</span>
                    <div className='pt-8 text-center absolute bottom-2.5 left-0 right-0 flex justify-center flex-nowrap'>
                        <a target="_blank" href={props.demoUrl}>
                            <button className='secondary-btn text-center rounded px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white duration-300'>{props.demoButton}</button>
                        </a>
                        <a target="_blank" href={props.codeUrl}>
                            <button style={{display: `${props.codeButtonVisibility}`}} className='secondary-btn text-center rounded px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white duration-300'>{props.codeButton}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkItem