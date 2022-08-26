import allReducers from '../reducers/index'

import { configureStore } from '@reduxjs/toolkit'

// function mystore () {
   
//     return createStore(allReducers )
// }

export default configureStore({
    reducer: allReducers
  })
// export default mystore()