import React from 'react'


export default function Card(props) {
  return (
    <div className='bg-white border-none rounded-20'>{props.children}</div> 
  );
}
