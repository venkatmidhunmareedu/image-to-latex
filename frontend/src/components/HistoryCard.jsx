import React, { useState } from 'react'
import Latex from 'react-latex-next'

const HistoryCard = (props) => {
    const [opened, SetOpen] = useState(false)

    return (

        <div id="accordion-collapse" className='my-5 transition-all delay-75' data-accordion="collapse">
            <h2 id="accordion-collapse-heading-3" className='text-white'>
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="true" aria-controls="accordion-collapse-body-3" onClick={(e) => {
                    // e.preventDefault();
                    SetOpen(!opened);
                }}>
                    <span>{props.content.slice(0, 50) + "....."}</span>
                    <svg data-accordion-icon class={`transition-all delay-75 w-3 h-3 rotate-${opened ? "180" : "0"} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" class={` transition-all delay-75 ${!opened && "hidden" }`} aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-white">
                        <Latex>
                            {props.content}
                        </Latex>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default HistoryCard