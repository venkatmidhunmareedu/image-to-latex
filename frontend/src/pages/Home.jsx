import React from 'react'
import Middle from '../components/Middle'

const Home = (props) => {
  return (
    <div>
        <Middle toast={props.toast} />
    </div>
  )
}

export default Home