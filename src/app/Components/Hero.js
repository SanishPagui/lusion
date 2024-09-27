import { Environment, Lightformer, MeshTransmissionMaterial, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { N8AO, EffectComposer} from '@react-three/postprocessing'
import { BallCollider, CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import { easing } from 'maath'
import React, { useMemo, useReducer, useRef, useState, useEffect} from 'react'
import * as THREE from 'three'

const accents=['#4060ff','#20ffa0','#ff4060','#ffcc00']
const shuffle=(accent=0)=>[
  {color:'#444',roughness:0.1},
  {color:'#444',roughness:0.75},
  {color:'#444',roughness:0.75},
  {color:'#FFFFFF',roughness:0.1},
  {color:'#FFFFFF',roughness:0.75},
  {color:'#FFFFFF',roughness:0.1},
  {color:accents[accent],roughness:0.1,accent:true},
  {color:accents[accent],roughness:0.75,accent:true},
  {color:accents[accent],roughness:0.1,accent:true},
]

const Hero = () => {
  return (
    <div className='w-full h-svh border-t-2'>
        <div className='mt-8 text-[6.4vw] p-4 leading-none md:flex md:mt-6 md:flex-col md:text-[2.6vw] md:justify-center md:items-center md:pr-[30vw] md:pl-[30vw] md:leading-[3vw]'>
          We help brands create digital experiences that connect with their audiance
        </div>
        <div className='p-4 h-[73%] md:px-8 md:h-[85%] flex md:pr-[4vw] md:pl-[4vw]'>
          <div className='w-full h-full '>
            <Scene style={{borderRadius:10}}/>
          </div>
        </div>
        <div className='w-full absolute h-fit flex bottom-0 top-auto justify-between items-center p-1 px-3 md:px-6'>
          <div className=' flex h-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>  
          <div className='text-black w-full text-sm font-semibold flex items-center justify-center'>
            SCROLL TO EXPLORE
          </div>
          <div className=' flex '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div> 
        </div>
    </div>
  )
}

function Scene(props){
  const [accent,click]=useReducer((state)=> ++state%accents.length,0 )
  const connectors=useMemo(()=>shuffle(accent),[accent])
  return(
    <Canvas onClick={click} shadows dpr={[1,1.5]} gl={{antialias:true}} camera={{position:[0,0,15], fov:17.5 ,near:1 ,far:20}} {...props}>
      <color attach="background" args={['#141622']}/>
      <ambientLight intensity={0.4}/>
      <spotLight position={[10,10,10]} angle={0.15} penumbra={1} intensity={1} castShadow/>
      <Physics gravity={[0,0,0]}>
        <Pointer/>
        {connectors.map((props,i)=><Connector key={i} {...props}/>)}
        <Connector position={[10,10,5]}>
          <Model>
            <MeshTransmissionMaterial clearcoat={1} thickness={.1} chromaticAberration={.1} samples={8} resolution={512}/>
          </Model>
        </Connector>
      </Physics>
      {/* <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4}/>
      </EffectComposer> */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI/3,0,1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI/2} position={[0,5,-9]} scale={2}/>
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI/2} position={[-5,1,-1]} scale={2}/>
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI/2} position={[-5,-1,-1]} scale={2}/>
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI/2} position={[10,1,0]} scale={8}/>
        </group>
      </Environment>
    </Canvas>
  )
}

function Connector({position,children,vec=new THREE.Vector3(),scale,r=THREE.MathUtils.randFloatSpread,accent,...props}){
  const api=useRef()
  const pos=useMemo(()=> position || [r(10),r(10),r(10)],[])
  useFrame((state,delta)=>{
    delta=Math.min(.1,delta)
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(.2))
  })
  return(
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <CuboidCollider args={[.38,1.27,.38]}/>
      <CuboidCollider args={[1.27,.38,.38]}/>
      <CuboidCollider args={[.38,.38,1.27]}/>
      {children?children:<Model {...props}/>}
      {accent && <pointLight intensity={4} distance={2.5} color={props.color}/>} 
    </RigidBody>
  )
}

function Pointer({vec=new THREE.Vector3()}){
  const ref=useRef()
  useFrame(({mouse,viewport})=>{
    ref.current?.setNextKinematicTranslation(vec.set((mouse.x*viewport.width)/2,(mouse.y*viewport.height)/2,0))
  })
  return(
    <RigidBody position={[0,0,0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]}/>
    </RigidBody>
  )
}

function Model({children,color='white',roughness=0, ...props }) {
  const ref=useRef()
  const {nodes,materials }=useGLTF('/c-transformed.glb')
  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta)
  })
  return (
    <mesh ref={ref} castShadow receiveShadow scale={10} geometry={nodes.connector.geometry}>
      <meshStandardMaterial metalness={0.2} roughness={roughness} map={materials.base.map} />
      {children}
    </mesh>
  )
}

export default Hero

