import { FC, ReactNode } from "react"
import {UserType} from '../types/custom'


type User = UserType & {
   children:ReactNode,
   onDelete:(id:number | undefined)=>void
}
// type CardProps = PropsWithChildren<{title:string}>


const Card:FC<User> = ({title,children,id,onDelete}) =>{

   function handleDelete(id:number | undefined){
      onDelete(id)
   }

   return (
      <article>
        <div>
            <h2>{title}</h2>
             {children}
        </div>
        <p>{id}</p>
        <button onClick={handleDelete.bind(null,id)}>Delete</button>
      </article>
    )
}


export default Card





// export default function Card({title,children}:CardProps){
//     return (
//     <article>
//         <div>
//             <h2>{title}</h2>
//              {children}
//         </div>
//         <button>Delete</button>
//     </article>
//     )
// }