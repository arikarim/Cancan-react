import React, { useEffect } from 'react'
import Auditor from './Auditor'
import Rejected from './Rejected'
import Reviewer from './Reviewer'

const RolePosts = () => {
  const roles = JSON.parse(localStorage.getItem('roles'))
  const toggle = ()  => {
    if (roles.includes('auditor')) {
      console.log('auditor')
    } else if (roles.includes('reviewer')) {
      console.log('reviewer')
    } else if (roles.includes('rejected')) {
      console.log('normal')
    }
  }
  useEffect(() => {
    console.log(roles)
    toggle()
  }, [roles])

  return (
    <div>
      {roles &&  roles.includes('reviewer') && <Reviewer />}
      {roles &&  roles.includes('auditor') && <Auditor />}
      {roles &&  !roles.includes('auditor') && !roles.includes('reviewer') && <Rejected />} 
    </div>
  )
}

export default RolePosts
