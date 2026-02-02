import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = ({ image , title , price, rating , id}) => {
    return (
        <Link to={`product/${id}`} className=' w-full py-2'>
            <img className='bg-gray-200 object-contain p-2 rounded-[13px] h-[200px] w-full'
                src={image}
                alt="image" />
            <div className='flex mt-2 flex-col gap-2'>
                <h1 className='line-clamp-1'>{title}</h1>
                <p className='font-bold font-serif text-yellow-500 flex items-center gap-1'>{rating?.rate} <FaStar className='p-0.5' /></p>
                <p className='font-medium font-serif'>${price}</p>
            </div>
        </Link>

    )
}

export default ProductCard