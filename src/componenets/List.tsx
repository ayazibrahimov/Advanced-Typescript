import React, { FC, ReactNode } from 'react'
import Card from "./Card";
import { UserType } from "../types/custom";
import InfoBox from './InfoBox';


interface ListProps {
    user: UserType[],
    onDelete:(id:number | undefined)=>void
}

const List:FC<ListProps> = ({user,onDelete}) => {
  
    if(!user.length){
        return (
         <InfoBox mode='hint'>You have no goals.Start adding some!</InfoBox>
        )
    }

    let warningBox: ReactNode ;

    if(user.length>=4){
        warningBox = <InfoBox mode='warning' severity='big' >You have added at least 4 element.
        Dont put too much your plate!
        </InfoBox>
    }
  
    return (
    <>
      {warningBox}
      <ul>
        {user?.map((data: UserType) => (
          <li key={data.id}>
            <Card key={data.id} title={data.title} id={data.id} onDelete={onDelete}>
              <p>{data.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List