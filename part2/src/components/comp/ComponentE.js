import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, UserChannel } from '../../App'


function ComponentE() {

    const userCOnt = useContext(UserContext)
    const userChan = useContext(UserChannel)
  return (
    <div>
      <ComponentF/>
      <div>{userCOnt} - {userChan}</div>
    </div>
  )
}

export default ComponentE
