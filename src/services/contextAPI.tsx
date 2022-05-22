import { createContext } from "react";
import { MessagesTypes } from "./types";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
import UserPhoto from "../assets/user-photo.png";
import Image from "../assets/messageImage.png";


type UserProviderTypes = {
  NewMessage: MessagesTypes[];
  active: boolean,
}

export const UserContext = createContext<UserProviderTypes>({} as UserProviderTypes);


export function UserProvider({children}: any){
  const NewMessage: MessagesTypes[] = [
    {ImagePeople: UserPhoto, name: "User Testing", date: "May 16", messageText: "How is the progress of the project?", isUser: true, active: true,},
    { ImagePeople: woman, name: "Woman user 1", office: "Developer Frontend", messageText: "Me: hi, how is the new project going?", date: "May 16", active: false, isUser: false },
    { ImagePeople: man, name: "Man user 1", office: "Developer Frontend", messageText: "This is my new project, I’m happy.", messageImage: Image, date: "May 15", active: true, isUser: false},
  ]
  const active = true;
  
  return(
    <UserContext.Provider value={{NewMessage, active}}>
      {children}
    </UserContext.Provider>
  )
}