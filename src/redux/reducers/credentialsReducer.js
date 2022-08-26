
import * as React from 'react'
import { Auth } from 'aws-amplify';

// async function FetchData() {

//     const [user,setuser]=React.useState()
//     var data ={}
//     await Auth.currentUserInfo().then(res=>{

//         console.log(res)
//         setuser(res)


//         console.log('user',user)
//       })

   
//     }

const credentialsReducer = (state = { value:{}}, action) => {
    

    //  console.log('AUCTUN = ',action.user )
    switch (action.type) {
      case "CREDENTIALS":
        return  (state =action.user)  

      default:
        return state;
    }
  };
  export default credentialsReducer;