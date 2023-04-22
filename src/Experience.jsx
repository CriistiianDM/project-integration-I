import { OrbitControls , 
         Sky, 
        } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import VideoPlane from './VideoPlane'
import ImagePlane from './ImagePlane'


export default function Experience() {

    return <>
        
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow={true}  position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Sky />
        <VideoPlane />
        <ImagePlane />
    </>
}