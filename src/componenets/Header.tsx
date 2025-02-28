import React, { FC, ReactNode } from 'react'

type TypeHeader = {
    src:string,
    alt:string,
}

type TypeImage = {
    image:TypeHeader
    children:ReactNode
}



const Header:FC<TypeImage> = ({image,children})=> {
  return (
    <header>
        <img {...image} />
        {children}
    </header>
  )
}

export default Header