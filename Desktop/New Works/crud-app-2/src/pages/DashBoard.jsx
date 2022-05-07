import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import {FaTrash, FaTimes} from "react-icons/fa";

const DashBoard = () => {

    const [open, setOpen] = useState(false);
    const [addEditFormType, setAddEditFormType] = useState('Add');

    const handleAddEditFormSubmit = (e) => {
        alert("Functionality Coming Soon");
        }
  return (
    <>
    <div className='px-4'>
    <div className=''>
        <div className="flex justify-between items-center py-3">
            <div className="">
                <h1 className='text-2xl font-bold underline'>
                    BarMAn
                </h1>
            </div>
                  <button className='"w-full bg-indigo-600 border border-transparent rounded-lg py-2 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={() => setOpen(true)}>Add New Item</button>
        </div>
    </div>
    
    <table className='table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
        <tr>
            <th className='font-bold'>#</th>
            <th className='font-bold'>Item Name</th>
            <th className='font-bold'>Category</th>
            <th className='font-bold'>Price (USD)</th>
            <th className=''></th>
        </tr>
            <tr>
                    <td>1</td>
                    <td>Cheessy Garlic Pita</td>
                    <td>Starters & Snacks</td>
                    <td>4</td>
                    <td className='flex items-center justify-between'>
                    <button className='bg-white shadow border border-transparent rounded-lg p-2 flex items-center justify-center text-base font-medium text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>✎ </button>
                     <button className='bg-indigo-600 border border-transparent rounded-lg p-2 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'><FaTrash/></button>
                 </td>
                </tr>
            <tr>
                <td>2</td>
                <td>Hummus with  PERi-PERi Drizzle & Pita</td>
                <td>Starters & Snacks</td>
                <td>5.5</td>
                <td className='flex items-center justify-between'>
                    <button className='bg-white shadow border border-transparent rounded-lg p-2 flex items-center justify-center text-base font-medium text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>✎ </button>
                     <button className='bg-indigo-600 border border-transparent rounded-lg p-2 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'><FaTrash/></button>
                 </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>20</td>
                <td className='flex items-center justify-between'>
                    <button className='bg-white shadow border border-transparent rounded-lg p-2 flex items-center justify-center text-base font-medium text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>✎ </button>
                     <button className='bg-indigo-600 border border-transparent rounded-lg p-2 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'><FaTrash/></button>
                 </td>
            </tr>
        </table>
        <footer className="flex justify-between items-center mt-4">
            <p className='text-gray-400'>© 2022 BarMAn</p>
            <p className='text-gray-400'><Link to="/login">Admin LogOut</Link> • </p>
        </footer>
    </div>
     <Transition.Root show={open} as={Fragment}>
     <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" onClose={setOpen}>
       <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" >
         <Transition.Child
           as={Fragment}
           enter="ease-out duration-300"
           enterFrom="opacity-0"
           enterTo="opacity-100"
           leave="ease-in duration-200"
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
         >
           <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity md:block" />
         </Transition.Child>

         {/* This element is to trick the browser into centering the modal contents. */}
         <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
           &#8203;
         </span>
         <Transition.Child
           as={Fragment}
           enter="ease-out duration-300"
           enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
           enterTo="opacity-100 translate-y-0 md:scale-100"
           leave="ease-in duration-200"
           leaveFrom="opacity-100 translate-y-0 md:scale-100"
           leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
         >
           <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
             <div className="w-full relative flex items-center rounded-md bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
               <button
                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8 focus:outline-none"
                 onClick={() => setOpen(false)}
               >
                 <FaTimes className="h-6 w-6 " aria-hidden="true"  />
               </button>

               <div className="w-full ">
                
                   <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{(addEditFormType === 'Add') ? 'Add Menu Item' : 'Edit'}</h2>

                   <form onSubmit={handleAddEditFormSubmit} className="mt-10">
                        <div className="">
                            <label htmlFor="itemsaname" className='block'>Item Name</label>
                            <input 
                            type="text" 
                            name='title' 
                            className="text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-indigo-500 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity"
                            placeholder='Enter item name'
                                // value={title}
                                //  onChange={e => setMessage(e.target.value)}
                            />

                            <br />
                            <div className="mt-3">
                                <label htmlFor="itemCategory" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state'>Item Category</label>
                                <select name="" id="grid-state" className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                                    <option value="0">Starters & Snacks</option>
                                    <option value="1">Salads</option>
                                    <option value="2">Peri-Peri Chicken</option>
                                    <option value="3">Sharing Platters</option>
                                </select>
                            </div>
                           <br />

                        <div>
                            <label htmlFor="itemPrice">Price</label>
                                <input
                                className="text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-indigo-500 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity" 
                                type="text" 
                                placeholder="Item Price" 
                                />
                        </div>
                           <br/>

                        </div>
                    <div className="flex mt-6">
                      <button className="w-full bg-indigo-600 border border-transparent rounded-lg py-3 px-8 mr-2 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{(addEditFormType === 'Add') ? 'Add' : 'Update'}</button>
                    </div>
                   </form>
                 </div>
               </div>
               </div>

         </Transition.Child>
       </div>
     </Dialog>
   </Transition.Root>
   </>
  )
}

export default DashBoard;