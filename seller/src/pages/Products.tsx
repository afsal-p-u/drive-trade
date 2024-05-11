import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdScreenshotMonitor } from "react-icons/md";
import { useAuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([])
    const { user } = useAuthContext()

    const getSellerProducts = () => {
        axios.get(`/product/seller/${JSON.parse(user!)}`).then((res) => {
            setProducts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getSellerProducts()
    }, [])
  return (
    <div className='min-h-[80vh]'>
      <h3>Vehicles</h3>

    <div className="flex justify-end my-3">
        <Link to="/add-product">
            <button className='px-7 py-2 text-sm bg-blue-400 rounded-md flex gap-2 text-white font-medium items-center'>
                <FaPlus className='text-md text-white' /> Add
            </button>
        </Link>
    </div>

        <div className="flex items-center justify-center">
            <table>
                <thead>
                    <tr className='border-[1px]'>
                        <th className='border-r-[1px] w-[30px]'>
                            <input type="checkbox" className='w-full h-full' />
                        </th>
                        <th className='border-r-[1px] w-[300px] text-sm px-2 py-2 text-start'>Name</th>
                        <th className='border-r-[1px] w-[200px] text-sm px-2 py-2 text-start'>Model</th>
                        <th className='border-r-[1px] w-[200px] text-sm px-2 py-2 text-start'>Fuel</th>
                        <th className='border-r-[1px] w-[100px] text-sm px-2 py-2 text-start'>Km</th>
                        <th className='border-r-[1px] w-[100px] text-sm px-2 py-2 text-start'>Availability</th>
                        <th className='border-r-[1px] w-[300px] text-sm px-2 py-2 text-start'>Controls</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item: any, i) => (
                    <tr className='border-[1px]' key={i}>
                            <td className='border-r-[1px] w-[30px]'>
                                <input type="checkbox" className='w-full h-full' />
                            </td>
                            <td className='border-r-[1px] w-[300px] text-sm px-2 py-2'>{item.name}</td>
                            <td className='border-r-[1px] w-[200px] text-sm px-2 py-2'>{item.model}</td>
                            <td className='border-r-[1px] w-[200px] text-sm px-2 py-2'>{item.transmission}</td>
                            <td className='border-r-[1px] w-[100px] text-sm px-2 py-2'>{item.runnedBy}</td>
                            <td className='border-r-[1px] w-[100px] text-sm px-2 py-2'>
                                <select name="" id="">
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                            </td>
                            <td className='border-r-[1px] w-[300px] text-sm px-2 py-2'>
                                <button
                                >
                                    <MdScreenshotMonitor  className='text-yellow-500 text-2xl cursor-pointer mr-2 p-1 
                                    hover:bg-yellow-500 hover:text-white rounded-full' />
                                </button>
                                <button
                                >
                                    <RiEditBoxLine  className='text-blue-500 text-2xl cursor-pointer ml-3 mr-2 p-1 
                                    hover:bg-blue-500 hover:text-white rounded-full' />
                                </button>
                                <button
                                >
                                    <MdOutlineDeleteOutline className='text-red-500 text-2xl cursor-pointer ml-3 p-1
                                    hover:bg-red-500 hover:text-white rounded-full' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Products
