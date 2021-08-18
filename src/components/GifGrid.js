import React from 'react'
import { UseFetchGifs } from '../hooks/useFetchGifs'
import { GifGriditem } from './GifGriditem';

 
export const GifGrid = ({ category }) => {


   const { data, loading } = UseFetchGifs( category ); 




         return (
            <>
                <h3 className="animate__animated animate__bounce"> {category} </h3>

                { loading  && <p className="animate__animated animate__flash">Loading</p> }

            
               { <div className="card-grid">
             
        
                {
                    data.map( img  => (
                       <GifGriditem
                        key={ img.id }
                        { ...img }
                       />
                    ))
                }
              
            </div> }

        </>
    )

}