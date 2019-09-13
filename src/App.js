import React from 'react';

import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="container-fluid pl-0 pr-0">
      {/* Header component is a stateless component, that will hold the header part of the application */}
      <Header />

      {/* Form component is a statefull component, that will be accountable for fetching details from the user and displaying it to the user in a list form with EDIT and REMOVE functionality */}
      <Form />
    </div>
  );
}

export default App;
