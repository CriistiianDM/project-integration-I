//import 
import React from 'react';
import { Box } from '@react-three/drei'
import { BoxGeometry , DoubleSide} from 'three';

export default function SphereFigure(props) {

   let props_aux = props.properties.data_sphere.props
   
   const boxGeometry = new BoxGeometry(3, 3, 3);
   boxGeometry.translate(0, 1, 0);

    return (
        <>
           <mesh geometry={boxGeometry}  castShadow={props.properties.data_sphere.castShadow} >
                {/* <BoxGeometry args={[3, 3, 3]} position={[0, 1, 0]}  /> */}
                <meshStandardMaterial  
                       {...props_aux} 
                       side={DoubleSide} 
                />
           </mesh>
        </>
    )

}