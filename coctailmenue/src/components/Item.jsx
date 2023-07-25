import React, { useContext } from 'react'
import ItemCard from '../UI/ItemCard'
import Loading from './Loading';

function Item(props) {
  return (
    <>
    <ItemCard id ={props.id} img ={props.pic} name = {props.name} info = {props.info} glass = {props.glass}  />
    </>
  )
}

export default Item
