import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, deleteProduct, incearse } from '../../app/cartSlice'
import { MdDelete } from 'react-icons/md'

const CartPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state => state.cart))
    return (
        <>
            <section>
                <div className='container p-5 grid grid-cols-2 gap-5 mx-auto '>
                    <div className='flex flex-col gap-5 '>
                        {cart?.map((item) => (
                            <div className='border border-gray-400 flex justify-between p-5 rounded-[20px] '>
                                <div className='flex gap-2'>
                                    <img className='w-[80px] object-cover ' src={item.image} alt="" />
                                    <div>
                                        <h1 className='text-[18px] line-clamp-1 '>{item.title} </h1>
                                        <p className='font-medium font-serif'>${item.price} </p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 justify-center items-baseline'>

                                    <div className='flex gap-2 items-center'>
                                        <button
                                            onClick={() => dispatch(decrease(item?.id))}
                                            className='w-[30px] cursor-pointer p-2 rounded-[50px] text-[24px] font-bold text-white bg-black ' >-</button>
                                        <button className='w-[30px] cursor-pointer p-2 rounded-[50px] text-[24px] border font-serif border-gray-400' >
                                            {item.qty} </button>
                                        <button
                                            onClick={() => dispatch(incearse(item?.id))}
                                            className='w-[30px] cursor-pointer p-2 rounded-[50px] text-[24px] font-bold text-white bg-black ' >+</button>
                                        <button onClick={() => dispatch(deleteProduct(item?.id))} className='text-red-600 cursor-pointer p-2 text-[30px]'><MdDelete /></button>

                                    </div>
                                </div>

                            </div>
                        ))
                        }
                    </div>
                    <div className='border border-gray-400 p-5 rounded-[20px] '>
                        <h1 className='text-[24px] font-medium p-2 '>Order Summary: </h1>
                        <div className='flex justify-between gap-5  pb-2'>
                            <h3 className='text-gray-500'>Subtotal</h3>
                            <p> ${cart?.reduce((sum, el) => {
                                sum += el.price * el.qty;
                                return Math.ceil(sum)
                            }, 0)}</p>
                        </div>
                        <div className='flex justify-between gap-5 pb-2'>
                            <h3 className='text-gray-500'>Discount (-20%)</h3>
                            <p className='text-red-500 font-medium'> ${Math.ceil(
                                cart?.reduce((sum, el) => sum + el.price * el.qty, 0) * 0.8
                            )}
                            </p>
                        </div>
                        <div className='flex justify-between gap-5 pb-5'>
                            <h3 className='text-gray-500'>Delivery Free</h3>
                            <p> $15
                            </p>
                        </div>
                        <div className='flex justify-between gap-5 pb-2'>
                            <h3 className='text-gray-800 text-[24px]'>Total</h3>
                            <p className='font-medium text-[18px]'> ${Math.ceil(
                                cart?.reduce((sum, el) => sum + el.price * el.qty, 0) * 0.8
                            )}

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartPage