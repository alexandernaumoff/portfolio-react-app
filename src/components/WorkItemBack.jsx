import React from 'react'

const WorkItem = (props) => {
    return (

        <div style={{ backgroundImage: `url(${props.bgImage})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl px-4 text-center block font-bold text-white tracking-wider'>
                    {props.name}

                </span>
                <span className='text-sm pt-4 px-1 text-left text-white block'>{props.desc}</span>
                <div className='pt-8 text-center'>
                    <a target="_blank" href={props.demoUrl}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>{props.demoButton}</button>
                    </a>
                    <a target="_blank" href={props.codeUrl}>
                        <button style={{display: `${props.codeButtonVisibility}`}} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white'>{props.codeButton}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WorkItem