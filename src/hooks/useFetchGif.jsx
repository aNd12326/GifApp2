// los hooks tambien pueden tener estados, pero no usaremos "jsx"
import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // los efectos no pueden ser "Async" xq esperan algo sincrono
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })

            })
    }, [category])

    return state // { data:[], loading:true}

}