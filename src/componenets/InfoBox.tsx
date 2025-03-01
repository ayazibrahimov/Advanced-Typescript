import React, { FC, ReactNode } from 'react'


type InfoBoxHint = {
    mode: 'hint',
    children:ReactNode
}

type InfoBoxWarning = {
    mode:'warning',
    severity: 'small'|'medium' |'big',
    children:ReactNode
}

type InfoBoxType = InfoBoxHint | InfoBoxWarning;


const InfoBox:FC<InfoBoxType> = (props) => {

  
    if(props.mode === 'hint'){
        return(
            <aside className='infobox infobox-hint'>
                <p>{props.children}</p>
            </aside>
        )
    }

  
    return (
    <aside className={`infobox infobox-warning warning--medium warning--${props.severity}`}>
        <h2>Warning</h2>
        <p>{props.children}</p>
    </aside>
  )
}

export default InfoBox