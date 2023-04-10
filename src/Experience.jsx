import  React  from 'react'
import { 
    OrbitControls , 
    MeshReflectorMaterial ,
    useHelper,
    useTexture
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'


//import components
import Sphere  from './SphereFigure';


//Experience component
export default function Experience() {

    //useHelper(hemisphereRef, THREE.HemisphereLightHelper, 0.5, 'hotpink')

    //rute to the textures
    const PATH = "/static/textures/"

    // todo: Por si un dia atreves de un evento se debe de cambiar las texturas
    const [ data_sphere, setData_sphere ] = React.useState({
      
        props: useTexture({
            map: PATH + "basecolor.jpg",
            //displacementMap: PATH + 'height.png',
            normalMap: PATH + 'normal.jpg',
            roughnessMap: PATH + 'roughness.jpg',
            aoMap: PATH + 'ao.jpg',
            metalnessMap: PATH + 'Material.png'
        }),
        castShadow: true,

    })

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Light_directional_aux 
            castShadow={true} 
            position={[1, 2, -4]} 
            intensity={ 1.5 }
            {...{ type: 0 }} 
        />

        <ambientLight intensity={ 0.5 } />

        <Sphere properties={{ data_sphere , setData_sphere }} />

        <mesh receiveShadow={true} position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry args={[1, 1]} />
            <MeshReflectorMaterial
                resolution={ 512 }
                blur={ [ 1000, 1000 ] }
                mixBlur={ 2 }
                mirror={ 0.5 }
                color="#7E7EF0"
            />
        </mesh>
    </>
}

function Light_directional_aux(prop) {
  
    const {
        type,
        castShadow,
        position,
        intensity
    } = prop

    //variables
    const directionalRef = React.useRef()
    const hemisphereRef = React.useRef();
    const pointRef = React.useRef();
    const rectAreaRef = React.useRef();
    const spotRef = React.useRef();

    let helper_ref = [directionalRef, hemisphereRef, pointRef, rectAreaRef, spotRef]
    let directionHelper = [ 'DirectionalLightHelper', 
                            'HemisphereLightHelper', 
                            'PointLightHelper', 
                            'RectAreaLightHelper',
                             'SpotLightHelper']
    
   
    let lights = [
        <directionalLight 
            ref={directionalRef}
            castShadow={castShadow}
            position={position}
            intensity={intensity}
        />,
        //esta luz no tiene sombra
        <hemisphereLight 
            ref={hemisphereRef} 
            castShadow={false}
            position={position}
            intensity={intensity}
        />,
        <pointLight 
            ref={pointRef}
            castShadow={castShadow}
            position={position}
            intensity={intensity}
        />,
        <rectAreaLight 
            ref={rectAreaRef}
            castShadow={false}
            position={position}
            intensity={intensity} 
        />,
        <spotLight 
            ref={spotRef}
            castShadow={castShadow}
            position={position}
            intensity={intensity} 
        />
    ]

    //helper
    helper_light(helper_ref[type], type , directionHelper[type])

    return lights[type]

}

function helper_light(ref, type , directionHelper) {
    if (type === 3) return null;
    return  useHelper(ref, THREE[directionHelper], 0.5, 'hotpink')
}