import { createContext } from "react";
import { MessagesTypes } from "./types";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
import UserPhoto from "../assets/user-photo.png";
import Image from "../assets/messageImage.png";
import api from "./api";

type UserProviderTypes = {
  NewMessage: MessagesTypes[];
  active: boolean,
  authContext: ()=>void;
}

export const UserContext = createContext<UserProviderTypes>({} as UserProviderTypes);


export function UserProvider({children}: any){
  const NewMessage: MessagesTypes[] = [
    {ImagePeople: UserPhoto, name: "User Testing", date: "May 16", messageText: "How is the progress of the project?", isUser: true, active: true,},
    { ImagePeople: woman, name: "Woman user 1", office: "Developer Frontend", messageText: "Me: hi, how is the new project going?", date: "May 16", active: false, isUser: false },
    { ImagePeople: man, name: "Man user 1", office: "Developer Frontend", messageText: "This is my new project, I’m happy.", messageImage: Image, date: "May 15", active: true, isUser: false},

  ]
  
  const active = true;

  //Função de autenticação do usuário com o github.
  function authContext(){
    //Como o código com o axios ta dando erro e meu prazo está curto farei com fetch normal e depois voltarei nessa questão.---->>>
    // api.get(`/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`,{
    //   headers:{
    //     Accept: "aplication/json"
    //   }
    // }).then(res =>{
    //   console.log(res.data);
    // }).catch(error=>{
    //   console.log("message:", error)
    // })

    //Com Fetch->
    fetch(`/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`,{
      headers:{
        Accept: "aplication/json"
      }
    }).then(res=>{
      console.log(res.json());
    })
  }
  
  return(
    <UserContext.Provider value={{NewMessage, active, authContext}}>
      {children}
    </UserContext.Provider>
  )
}