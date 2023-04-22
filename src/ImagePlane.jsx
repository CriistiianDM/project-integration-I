//import libraries
import React from 'react';
import { useRef } from 'react'
import image_1 from './1.png'
import image_2 from './2.png'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function ImagePlane() {

    //Use ref to get the plane
    const plane = useRef();

    //cargar la imagen
    const image_1_ = useLoader(TextureLoader, image_1);
    const image_2_ = useLoader(TextureLoader, image_2);
 
    const handleClick = (e) => {
        e.stopPropagation();

        //cambiar la imagen
        if(plane.current.material.map === image_1_) plane.current.material.map = image_2_;
        else plane.current.material.map = image_1_;

    }
    

    return (
        <>
            <mesh onDoubleClick={handleClick} ref={plane} rotation-y={ - Math.PI * 0.5 } position={[0, 0, -20]} scale={ 4 }>
                <planeGeometry args={[5, 5]} />
                <meshBasicMaterial 
                    toneMapped={false}
                    map={image_1_}
                />
            </mesh> 
        </>
    )
}