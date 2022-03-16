/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BitGem (https://sketchfab.com/bitgem)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pine-tree-proto-series-free-08014e92a59244c992884091218230b8
title: Pine Tree - Proto Series - Free
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.tree_pine_SC_04_pine_tree_red_mat_0.geometry} material={materials.pine_tree_red_mat} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')