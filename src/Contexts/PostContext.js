
import { createContext,useState } from "react";

export const PostContext=createContext(null)

 function Post ({children}){
    const [postDetails,setPostDetails]=useState(null)
    return(
        <PostContext.Provider value={{setPostDetails,postDetails}} >
            {children}
        </PostContext.Provider>
    )
}
export default Post

// export default function PostDetailsContext ({children}) {
     
//     const [postDetails,setPostDetails]=useState()

//     return(
//         <postContext.Provider value={{postDetails,setPostDetails}}>
//             {children}
//         </postContext.Provider>
//     )
// }