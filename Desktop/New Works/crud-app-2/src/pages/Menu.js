import React from 'react'
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className='px-4'>
        <div className=''>
            <div className="flex justify-between items-center py-3">
                <div className="">
                    <h1 className='text-2xl font-bold underline'>
                        BarMAn
                    </h1>
                </div>
                      <button className='"w-full bg-indigo-600 border border-transparent rounded-lg py-2 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Place Order</button>
            </div>
        </div>
        <table className='w-full '>
            <tr>
                <th className='font-bold'>#</th>
                <th className='font-bold'>Item Name</th>
                <th className='font-bold'>Category</th>
                <th className='font-bold'>Price (USD)</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Cheessy Garlic Pita</td>
                <td>Starters & Snacks</td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Hummus with  PERi-PERi Drizzle & Pita</td>
                <td>Starters & Snacks</td>
                <td>5.5</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>20</td>
            </tr>
            <tr>
           
            </tr>
        </table>
        <footer className="flex justify-between items-center mt-4">
            <p className='text-gray-400'>© 2022 BarMAn</p>
            <p className='text-gray-400'><Link to="/login">Admin Login</Link> • <Link to="/">Privacy Policy</Link> • <Link to="/">Directions</Link> • <Link to="/">Contact Us</Link></p>
        </footer>
    </div>
  )
}

export default Menu;