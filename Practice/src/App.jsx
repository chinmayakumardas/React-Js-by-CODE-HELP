import React from 'react';
import Form from './Form-comp/Form';
import Extra from './Form-comp/Extra';
import Used from './UseState-Components/Used';
import { x } from './UseState-Components/Used';
import FormNew from './Form-comp/FormNew';

function App() {

  
  return (
    <div className='bg-green-300 h-screen gap-5' >
      {/* <Form/>
      <Extra/> */}
      {/* <Used></Used>
      <p>{x+5}</p> */}
      <FormNew/>
    </div>
  );
}

export default App;
