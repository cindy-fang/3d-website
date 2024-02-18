import React from 'react';
import { useGLTF } from '@react-three/drei';
import duoScene from '../assets/3d/duolingo.glb';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Duo1 = ({ isRotating }) => {
    const duo = useGLTF(duoScene)
    const duoRef = useRef();

    useFrame((_, delta) => {
        if(isRotating) {
            duoRef.current.rotation.y += 0.15 * delta
        }
    })

    return (
        <mesh ref={duoRef}>
            <primitive object={duo.scene}/>
        </mesh>
    )
    }

export default Duo1;
