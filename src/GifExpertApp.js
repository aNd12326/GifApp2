import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['one punch','samurai x','dragon ball']
    const [categories, setcategories] = useState(['one punch'])

    // const handleAdd = () => {
    //     setcategories( [...categories,'Hunter'] )
    // }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setcategories}/>
        <hr />

        <ol>
            {
                categories.map( (category) => {
                    return(
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                })
            }
        </ol>
    </>
  )
}

