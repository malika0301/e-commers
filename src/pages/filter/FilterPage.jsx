import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/ProductCard';

const FilterPage = () => {
    const [categoryName, setCategoryName] = useState("All")
    const { data, isLoading } = useFetch({ url: "products", key: ["products"] })
    const products = data?.data;
    const categories = products?.map((el) => {
        return el.category
    })
    const allCategories = [...new Set(categories)]

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
            <section className='container mx-auto p-5'>
            <div className='container mx-auto p-5 flex justify-between gap-5'>
                <div className='bg-gray-200 p-4 w-[400px] h-[400px] rounded-[20px]'>
                    <ul className='flex flex-col gap-5'>
                            <li className='uppercase p-2 text-[18px] font-bold font-serif rounded-2xl'>
                                <input value={"All"} onClick={(e) => setCategoryName(e?.target?.value)} id='All' name='radio' type="radio" />
                                <label className='px-2' htmlFor={"All"} >{"All"}</label>
                            </li>
                        {
                            allCategories?.map((el) =>(
                                <li className='uppercase font-bold p-2 text-[18px] bg- font-serif rounded-2xl'>
                                    <input value={el} onClick={(e) => setCategoryName(e?.target?.value)} id={el} name='radio' type="radio" />
                                    <label className='px-2' htmlFor={el} >{el}</label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='grid grid-cols-3 gap-5 max-w-[1000px]' 
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            height: "80vh",
                            overflow: "scroll"
                        }}>
                    {
                       categoryName === "All" ? products?.map((product) =>(
                        <ProductCard {...product}/>
                       )) : products?.filter((el) => el.category === categoryName)?.map((product) => (
                           <ProductCard {...product} />
                       ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default FilterPage