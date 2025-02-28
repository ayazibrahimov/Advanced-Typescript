import React, { FC, ReactNode } from 'react'

type InfoBoxType = {
    mode: 'hint' | 'warning',
    children:ReactNode
}


const InfoBox:FC<InfoBoxType> = ({mode,children}) => {
  
    if(mode === 'hint'){
        return(
            <aside className='infobox infobox-hint'>
                <p>{children}</p>
            </aside>
        )
    }
  
    return (
    <aside className='infobox infobox-warning warrning--medium '>
        <h2>Warning</h2>
        <p>{children}</p>
    </aside>
  )
}

export default InfoBox