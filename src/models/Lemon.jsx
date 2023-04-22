/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Lemon(props) {
  const lemonRef = useRef(null)
  const { nodes } = useGLTF("/static/lemon.glb");
  return (
    <group ref={lemonRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload("/static/lemon.glb");
