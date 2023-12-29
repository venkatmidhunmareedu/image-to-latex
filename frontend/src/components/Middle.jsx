import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const Middle = (props) => {
    const [file, setFile] = useState(null);
    const [filesrc, setFilesrc] = useState(null);
    const [latexvalue, setLatex] = useState(null);
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const handlePreview = (event) => {
        if (event.target.files[0]) {
            props.toast("success", 'Image inserted')
        }
        else {
            props.toast("info", "Image not inserted")
        }
        setFile(event.target.files[0])
        setFilesrc(URL.createObjectURL(event.target.files[0]));
    }

    const downloadfile = (toast) => {
        if (!latexvalue) {
            toast("error", "Generate latex to download");
            return;
        }
        props.toast("success", "Downloading...")
        const element = document.createElement("a");
        const file = new Blob([latexvalue], { type: "text/plain" });
        element.classList.add("hidden");
        element.href = URL.createObjectURL(file);
        element.download = "latexfile.txt";
        document.body.appendChild(element);
        element.click();
    }

    const generateLatex = async (file) => {
        const formData = new FormData
        formData.append("file", file)
        if (file) {
            setLoading(true)
            await axios.post(`${"http://127.0.0.1:8000/convert"}`, formData).then((response) => {
                if (response.data.success == "true") {
                    setLatex(response.data.data)
                    setLoading(false)
                    props.toast("success", "Latex generation successful!")
                }
                else {
                    setLoading(false)
                    props.toast("error", "Latex generation successfull")
                }
            })
                .catch(err => {
                    setLoading(false)
                    props.toast("error", "Server Error")
                })
        }
        else {
            props.toast("error", "Please insert an image")
        }
    }



    return (
        <div className='flex-row justify-center text-center md:mx-40  mx-5  md:mt-20 mt-10'>
            {
                !file && <div className='flex justify-center my-2 '>
                    <div className="flex items-center justify-center md:w-1/2 w-full">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 800px x 400px)</p>
                            </div>
                            <input id="dropzone-file" accept="image/*" onChange={handlePreview} type="file" className="hidden" />
                        </label>
                    </div>
                </div>
            }
            {
                file && <div className=''>
                    <p className='dark:text-white font-bold my-2 relative'>Preview
                    </p>
                </div>

            }
            {
                file && <div className='flex justify-center text-center'>

                    <div className='flex justify-center text-center w-auto relative'>
                        {!loading && <div className='absolute right-2 top-2 '>
                            {
                                file && <button onClick={(e) => {
                                    setLatex(null)
                                    setFile(null);
                                    props.toast("info", "Image removed");
                                }} className='dark:bg-slate-500 p-2 rounded-lg hover:bg-slate-600'>
                                    {
                                        <IoMdClose className='text-white font-bold' />
                                    }
                                </button>
                            }
                        </div>}
                        <img className="p-1 border-2 border-slate-800 h-auto rounded-lg md:w-[50%]  w-[100%]" src={!filesrc ? "default.jpg" : filesrc} alt="image description" />
                    </div>
                </div>
            }
            <br />
            <div>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={(e) => {
                    generateLatex(file);
                }}>Generate LaTex</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={(e) => {
                    downloadfile(props.toast);
                }}>Download LaTex as txt file</button>
            </div>
            {
                loading &&
                <div className='flex justify-center text-center my-5'>
                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            }
            {
                (latexvalue && !loading) && <div className='flex justify-center text-center my-3'>
                    <div className='border-2 border-slate-800 rounded-md max-w-sm justify-center relative'>
                        <div className='absolute right-2 top-2 '>
                            <CopyToClipboard text={latexvalue}
                                onCopy={() => {
                                    setCopied(true);
                                    setTimeout(() => {
                                        setCopied(false);
                                    }, 2000);
                                }}>
                                <button onClick={(e) => {
                                    props.toast("info", "Copied to clipboard")
                                }} className='dark:bg-slate-500 p-2 rounded-lg'>
                                    {
                                        !copied ? <FaCopy className='dark:text-white' /> : <TiTick className='dark:text-white' />
                                    }
                                </button>
                            </CopyToClipboard>
                        </div>
                        <div className='m-1 bg-slate-700 rounded-md p-8'>
                            <p className={`text-slate-500 ${latexvalue && "text-white"}`} > <Latex>{latexvalue ? latexvalue : "Generated LaTex will appear here... "}</Latex> </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Middle