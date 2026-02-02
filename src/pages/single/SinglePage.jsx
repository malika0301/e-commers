import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { FaStar } from 'react-icons/fa'
import ReviewsGrid from '../../components/ReviewsGrid'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrease, incearse } from '../../app/cartSlice'

const SinglePage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data, isLoading } = useFetch({ url: `products/${id}`, key: ["products", id] })
    const cart = useSelector((state) => state.cart)
    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20 gap-2">
                <span className="w-2 h-2 bg-black rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
        );
    }
    const singleProducts = data?.data;
    return (
        <>
            <section className='container mx-auto p-5'>
                <div className=' container mx-auto p-5 grid grid-cols-2 items-start gap-5'>
                    <img className='bg-gray-200 w-full object-contain rounded-[20px] p-5 h-[70vh] ' src={singleProducts?.image} alt="photo" />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[24px] font-bold py-2'>{singleProducts?.title}</h1>
                        <p className='text-[18px] font-medium '>{singleProducts?.description}</p>
                        <p className='text-[24px] py-3 font-serif text-yellow-500 flex items-center gap-2'>{singleProducts?.rating?.rate} <FaStar className=''/></p>
                        {
                            cart?.find((el) => el.id === singleProducts?.id) ? (
                                <div className='flex gap-2'>
                                    <button
                                    onClick={() => dispatch(decrease(singleProducts?.id))}
                                     className='w-full cursor-pointer p-3 rounded-[50px] text-[24px] font-bold text-white bg-black ' >-</button>
                                    <button className='w-full cursor-pointer p-3 rounded-[50px] text-[24px] border font-serif border-gray-400' >
                                       {cart?.find((el) => el.id === singleProducts?.id)?.qty} </button>
                                    <button 
                                        onClick={() => dispatch(incearse(singleProducts?.id))} 
                                     className='w-full cursor-pointer p-3 rounded-[50px] text-[24px] font-bold text-white bg-black ' >+</button>
                                </div>
                            ) : (
                                    <div>
                                        <button onClick={() => dispatch(addToCart(singleProducts))} className='w-full cursor-pointer p-3 rounded-[50px] text-[20px] text-white bg-black ' >Add To Cart</button>
                                    </div>
                            )
                        }
                        
                    </div>
                    
               </div>
                <div className='mt-5'>
                    <ReviewsGrid />
                </div>
            </section>
        </>
    )
}

export default SinglePage