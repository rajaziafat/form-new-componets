import { useState } from 'react';
import './App.css'
import Modal from './Components/Modal'
import MultiRangeSlider from './Components/MultiRangeSlider'

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-full flex justify-center space-x-4 '>
          <MultiRangeSlider />

          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={openModal}
          >
            Open Modal
          </button>
        </div>

      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} />

    </>
  )
}

export default App
