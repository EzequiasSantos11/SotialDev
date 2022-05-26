import { auth, githubProvider, googleProvider, signInWithPopup } from "./firebaseconfig";
import { createContext, useState, useEffect } from "react";
import UserPhoto from "../assets/user-photo.png";
import Image from "../assets/messageImage.png";
import {useNavigate} from "react-router-dom";
import { MessagesTypes } from "./types";
import woman from "../assets/woman.png";
import man from "../assets/man.png";


type UserProviderTypes = {
  NewMessage: MessagesTypes[];
  active: boolean,
  user: UserProps | undefined,
  loginGithub: ()=>Promise<void>,
  loginGoogle: ()=>Promise<void>,
}

type UserProps ={
  id: string
  name: string,
  avatar: string,
}

export const UserContext = createContext<UserProviderTypes>({} as UserProviderTypes);

export function UserProvider({children}: any){
  const [user, setUser] = useState<UserProps>();
  const history = useNavigate();

  const NewMessage: MessagesTypes[] = [
    {id: 1, ImagePeople: UserPhoto, name: "User Testing", date: "May 16", messageText: "How is the progress of the project?", isUser: true, active: true,},
    {id: 2, ImagePeople: woman, name: "Woman user 1", office: "Developer Frontend", messageText: "Me: hi, how is the new project going?", date: "May 16", active: false, isUser: false },
    {id: 3, ImagePeople: man, name: "Man user 1", office: "Developer Frontend", messageText: "This is my new project, I’m happy.", messageImage: Image, date: "May 15", active: true, isUser: false},

  ]
  
  const active = true;

  // //Recuperar dados de usuário que já foi cadastrado, no reload.
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        const { displayName, photoURL, uid} = user;
        if(!displayName || !photoURL){
          throw new Error("Missing information from Github Account.");
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
  },[])
  //Função de autenticação do usuário com o github.
  async function loginGithub(){
    if(user){
      history("/home");
    }else{
      const result = await signInWithPopup(auth, githubProvider);
      if(result.user){
        const { displayName, photoURL, uid} = result.user;
        if(!displayName || !photoURL){
          throw new Error("Missing information from Github Account.");
        }
        localStorage.setItem("user", `[name: ${displayName}, avatar: ${photoURL}], id: ${uid}`)
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
        history("/home");
      }
    }
  }
  //Login com Google Account.
  async function loginGoogle(){
    if(user){
      history("/home");
    }else{
      const result = await signInWithPopup(auth, googleProvider);
      if(result.user){
        const { displayName, photoURL, uid} = result.user;
        if(!displayName || !photoURL){
          throw new Error("Missing information from Github Account.");
        }
        localStorage.setItem("user", `[name: ${displayName}, avatar: ${photoURL}], id: ${uid}`)
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
        history("/home");
      }
    }
  }

  return(
    <UserContext.Provider value={{user, NewMessage, active, loginGithub, loginGoogle}}>
      {children}
    </UserContext.Provider>
  )
}