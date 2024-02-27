import React, { useState } from 'react';
import Select from 'react-select';

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;



    const gender = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'division', label: 'Division' },
    ];

    const coaching = [
        { value: 'physical', label: 'Physical Workshops' },
        { value: 'online', label: 'Online Workshops' },

        { value: '1coaching', label: '1:1 Coaching' },
                { value: 'video', label: 'Video Tutorials' },

    ];

    const software = [
        { value: 'captureone', label: 'Capture One' },
        { value: 'adobe', label: 'Adobe Photoshop' },

        { value: '3d', label: '3D LUT Creator' },
                { value: 'ai', label: 'Artifical intelligance (AI)' },

    ];



    const payments = [
        { value: 'paid', label: 'Paid jobs only' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
    ];
    const languages = [
        { value: 'EN', label: 'English' },
        { value: 'FR', label: 'French' },
        { value: 'GR', label: 'Germen' },
    ];

    const format = [
        { value: 'full', label: 'Full Format' },
        { value: 'mid', label: 'Mid Format' },
    ];



    const [selectedOption, setSelectedOption] = useState(null);
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'transparent',
            border: '2px solid #555',
            borderColor: state.isFocused ? '#555' : '#555',
            borderRadius: '5px',
            padding: '2px',
            boxShadow: state.isFocused ? '0 0 0 1px #555' : 'none',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#21c55e' : '#333',
            '&:hover': {
                backgroundColor: 'RGBA(33,171,83,0.5)', // Light purple with opacity
            },
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#fff', // Adjust text color to white
        }),
        input: (provided, state) => ({
            ...provided,
            color: '#fff',
            '&::placeholder': {
                color: '#fff !important', // Adjust placeholder color here
            },
        }),
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: '#333',
            color: '#fff', // Adjust dropdown menu background color
            zIndex: 9999, // Set the z-index value as needed
        }),
        multiValue: (provided, state) => ({
            ...provided,
            backgroundColor: 'RGBA(33,171,83,0.5)', // Change multi-value tag background color
            borderRadius: '5px',
            height: '22px',
        }),
        multiValueLabel: (provided, state) => ({
            ...provided,
            color: '#fff',
            height: '22px', // Change multi-value tag text color
            display: 'flex',
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
        }),

    };



    return (







        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-transparent bg-opacity-80 px-4 z-50">
                <div className="bg-[#2d2d2d] border-gray-600 w-full max-w-[550px]  p-4 rounded-xl shadow-lg flex flex-col overflow-x-auto">
                    <div className="flex w-full justify-between ">


                        <div className='flex justify-start w-full'>
                            <h1 className='text-white text-2xl'>Section Placeholder</h1>




                        </div>


                        <div className='flex items-center space-x-2'>
                            <div className='flex justify-end'>
                                <div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>


                                </div>
                            </div>


                            <div className='flex justify-end'>
                                <div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>

                                </div>
                            </div>











                            <div className='flex justify-end'>
                                <div>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-white cursor-pointer"
                                        onClick={onClose}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='mt-8'>


                        <div className='relative py-2  mt-2'>
                            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1">Gender</label>

                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={gender}
                                styles={customStyles}

                                placeholder="Gender" // Apply custom styles here
                            />

                        </div>


                        <div className='relative py-2  mt-2'>
                            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1">Languages</label>

                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={languages}
                                styles={customStyles}
                                isMulti

                                placeholder="Select languages" // Apply custom styles here
                            />

                        </div>


                        <div className='relative py-2  mt-2'>
                            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1">Communication Language</label>

                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={languages}
                                styles={customStyles}


                                placeholder="languages" // Apply custom styles here
                            />

                        </div>

                        <h3 className='text-lg text-white'> Experiance (Years) 14</h3>

                        <div className='relative py-2  mt-2'>
                            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1">Payment</label>

                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={payments}
                                styles={customStyles}


                                placeholder="Payments" // Apply custom styles here
                            />

                        </div>


                        <div className='relative py-2  mt-2'>
                            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1">Coaching</label>

                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={coaching}
                                styles={customStyles}
                                isMulti

                                placeholder="Select Coaching" // Apply custom styles here
                            />

                        </div>



                        <div className='relative py-2  mt-2'>
                            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1">Software</label>

                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={software}
                                styles={customStyles}
                                isMulti

                                placeholder="Select Software" // Apply custom styles here
                            />

                        </div>



                        <div className='relative py-2  mt-2'>
                            <label className="block text-sm text-white absolute top-1 z-10 -mt-2 ml-2 bg-[#2d2d2d] px-1">Format</label>

                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={format}
                                styles={customStyles}
                                isMulti

                                placeholder="Select format" // Apply custom styles here
                            />

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Modal;
