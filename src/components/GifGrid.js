// import React, { useEffect, useState } from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState( [] );
    const { data:images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs( category ) //Nos da un arreglo de objetos, que vienen con la informacion de los GIF
    //         .then( setImages ); // Con la información que optuvimos se manda a images el cual lo recoremos con MAP
    // }, [ category ]);

    return (
        <>
            <h3 className='animate__animated animate__fadeInLeftBig'>{ category }</h3>
            { loading && 'Esta cargando prro :V'}
            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }  
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    );
};
