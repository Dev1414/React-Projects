import React from 'react'
import Alert from '../components/Alert';

function AlertApp() {
  return (
    <div className='container mx-auto'>
      <Alert type={'success'} message={'Normal alert'} />
      <Alert type={'info'} message={'Good Morning'} delay={true}/>
    </div>
  )
}

export default AlertApp;