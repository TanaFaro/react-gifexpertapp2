import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

     const [categories, setCategories] = useState(['Dragon ball']);

   return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={ setCategories } />
            <hr />

           <ol>
              {
                 categories.map( category => (
                    <GifGrid 
                    key={ category }
                    category={ category } />
                
             ))
          }
            
        </ol>
    
    </>
    
    )
}
   