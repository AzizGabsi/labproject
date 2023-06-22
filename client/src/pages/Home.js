import React, { useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux"


const Home = () => {
  const dispatch = useDispatch()
  const {count, userList} = useSelector(state => state.users)
  // useEffect( () => {
  //     dispatch(getUsers())
  // }, [])
  return (
    <div>
      
{/* {
  userList.map((el) => <div> {el.name} </div>)
} */}
    
    </div>
  )
}

export default Home