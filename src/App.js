import React, { Component } from 'react';
import Section from './components/Section';
import ContactForm from './components/ContactForm';

import './App.css';

// export default function App() {
//   return 'Hello world!';
// }

class App extends Component {
state = {
  contacts: [],
  name: ''
}
  
  addContact = data => {
    console.log(data);
  }
  
  render() {
    
    return (
      <>
        <ContactForm onSubmit={this.addContact}/>
      </>
    ) 
  }
}

export default App;
