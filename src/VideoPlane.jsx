//import libraries
import React from 'react';
import VideoHtml from './video3.mp4'
import { 
    Html,
    useVideoTexture
} from '@react-three/drei'
import { useRef } from 'react'


//Porfin despegue, voy a lograrlo, no me rindo!!!!
//yo puedo!!!!!!

export default function VideoPlane() {

    //Use ref to get the plane
    const plane = useRef();
    const videoTextureRef = useRef(null);

    const [ rep_video , setRepVideo ] = React.useState({
        unsuspend: 'canplay',
        autoPlay: false,
        muted: false,
        loop: false,
        start: false,
    });
   
    
    // TODO: Siempre en react importar de esta forma: import Video from 'Rute', no hacer esto, tiene sus riesgos mentales.
    //cargar el video
    const videoTexture_ = useVideoTexture(VideoHtml, rep_video);
    
    //evento
    const handleClick = (e) => {
        e.stopPropagation();

        //Ah si puede!!!!!!!!!!!!!
        const _video_hmtl = videoTextureRef.current.map.source.data 
        //creo que esta forma se le puede cambiar para que apunte a youtube
        // y saltarse las politicas de seguridad de los navegadores
        //pero es una teroría, no lo he probado

        //pausar el video
        if(_video_hmtl.paused) _video_hmtl.play();
        else {
            _video_hmtl.pause();
        }
         
    }


    //return the video plane
    return (
        <>
            <mesh onClick={handleClick} ref={plane} rotation-y={ - Math.PI * 0.5 } position={[-4, 0, 1]} scale={ 4 }>
                <planeGeometry args={[5, 5]} />
                <meshBasicMaterial 
                    toneMapped={false}
                    map={videoTexture_}
                    ref={videoTextureRef}
                />
            </mesh> 
        </>
    )
}