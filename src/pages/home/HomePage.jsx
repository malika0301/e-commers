import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch'
import ReviewsSlider from '../../components/ReviewsSlider'
import Hero from '../../components/Hero'

const HomePage = () => {
    const [count, setCount] = useState("Default")
    const { data, isLoading } = useFetch({ url: "products", key: ["products"] })
    const products = data?.data;
    const categories = products?.map((el) => {
        return el.category
    })
    const allCategories = [...new Set(categories)]

    function viewMore(category) {
        if (category === count) {
            setCount("Default")
        } else {
            setCount(category)
        }
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20 gap-2">
                <span className="w-2 h-2 bg-black rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
        );
    }

    return (
        <>
            <Hero />
            <section className='container mx-auto p-5'>
                <div className='container mx-auto p-5'>
                    
                    {
                        allCategories?.map((category) => {
                            return (
                                <div>
                                    <h1 className='text-center text-3xl md:text-4xl uppercase font-extrabold leading-tight mt-5 mb-7' >
                                        {category}
                                    </h1>
                                    <div className='grid grid-cols-4 gap-5'>
                                        {category === count
                                            ? products
                                                ?.filter((item) => item.category === category)
                                                ?.map((el) => <ProductCard {...el} />)
                                            : products
                                                ?.filter((item) => item.category === category)
                                                ?.slice(0, 4)
                                                ?.map((el) => <ProductCard {...el} />)}
                                    </div>
                                    <button onClick={() => viewMore(category)} className='border-[2px] border-gray-200 px-5 py-[10px] rounded-[50px] cursor-pointer block mx-auto mt-2 mb-5 '>
                                        {count === "Default" ? "View All" : "View Less"}
                                    </button>
                                </div>
                            )
                        })
                    }
                    <div>
                        <ReviewsSlider />
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default HomePage