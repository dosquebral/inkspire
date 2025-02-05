import React from 'react'
import Navbar from '../components/Navbar';
import NoteCard from '../components/NoteCard';
import { MdAdd } from "react-icons/md";
import AddEditNotes from '../components/AddEditNotes';

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard 
            title='sample note text'
            date='feb 04 2025'
            content="content note"
            tags='#meeting'
            isPinned={true}
            onEdit={()=> {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      

      <button className='w-16 h-16 flex items-center justify-center bg-[var(--secondary)] rounded-2xl absolute right-10 bottom-10 hover:bg-green-900'>
        <MdAdd className='text-white text-[32px]' />
      </button>

      <AddEditNotes />
    </>
  )
}

export default HomePage