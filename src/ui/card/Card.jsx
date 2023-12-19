import React from 'react'


export default function Card(props) {
  return (
    <div className={`bg-white border-none rounded-lg ${props.className}`}>{props.children}</div> 
  );
}
