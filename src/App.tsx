import { useState } from "react";
import myImage1 from "../public/goals.jpg";
import Header from "./componenets/Header";
import { UserType,FormType } from "./types/custom";
import List from "./componenets/List";
import Form from "./componenets/Form";



function App() {
  const [user, setUser] = useState<UserType[]>([]);

  function onDelete(id:number|undefined){
    setUser((prev)=>prev.filter(data=>data.id !==id && data))
  }


  //add data to form
  function handleForm(data:FormType){
    const {goal:title,summary:description} = data
    setUser((prevObj) => {
      const obj: UserType = {
        id: +Math.random().toFixed(4),
        ...{title,description}
      };
      return [...prevObj, obj];
    });

  }

  return (
    <main>
      <Header image={{ src: myImage1, alt: "Your first Image" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <Form handleForm={handleForm} />
      <List user={user} onDelete={onDelete}/>
    </main>
  );
}

export default App;
