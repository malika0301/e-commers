import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useFetch = ({ url, key }) => {

    const getData = async () => {
        let res = await axios.get(`https://fakestoreapi.com/${url}`)
        return res
    }

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: key,
        queryFn: getData
    })


    return {data, isLoading, isFetching, error}
}

export default useFetch