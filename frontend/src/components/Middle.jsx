import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Middle = () => {
    const [file, setFile] = useState("default.jpg");
    const [latexvalue, setLatex] = useState(null);
    const [copied, setCopied] = useState(false);
    const handlePreview = (event) => {
        if (!file) {
            alert("No file inserted!");
            return;
        }
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    const generateLatex = () => {
        
    }

    return (
        <div className='flex-row justify-center text-center md:mx-40  mx-5  md:mt-20 mt-10'>
            <div className='flex justify-center my-2'>
                <div class="flex items-center justify-center md:w-1/2 w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" accept="image/*" onChange={handlePreview} type="file" class="hidden" />
                    </label>
                </div>
            </div>
            <p className='dark:text-white font-bold my-2'>Preview</p>
            <div className='flex justify-center text-center'>
                <img className="p-1 border-2 border-slate-800 h-auto rounded-lg md:w-[50%]  w-[100%]" src={file} alt="image description" />
            </div>
            <br />
            <div>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Generate LaTex</button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download LaTex as txt file</button>
            </div>
            <div className='flex justify-center text-center my-3'>
                <div className='border-2 border-slate-800 rounded-md max-w-sm justify-center relative'>
                    <div className='absolute right-2 top-2 '>
                        <CopyToClipboard text={"Hello"}
                            onCopy={() => {
                                setCopied(true);
                                setTimeout(() => {
                                    setCopied(false);
                                }, 2000);
                            }}>
                            <button className='dark:bg-slate-500 p-2 rounded-lg'>
                                {
                                    !copied ? <FaCopy className='dark:text-white' /> :  <TiTick  className='dark:text-white'/>
                                }
                            </button>
                        </CopyToClipboard>
                    </div>
                    <div className='m-1 bg-slate-700 rounded-md p-8'>
                        <p className={`text-slate-500 ${ latexvalue && "text-white"}`} >Generated LaTex will appear here...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle