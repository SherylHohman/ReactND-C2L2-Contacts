import React, { Component } from 'react';
import ListContacts from "./ListContacts.js";

class App extends Component {

  state = {
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]

  }

  removeContact = (contact) => {
    this.setState( (prevState) => ({
      contacts: prevState.contacts.filter((contacts_old) => (
        contacts_old.id !== contact.id
        // NO ; at the end of above line -- its a property on an Object, not a var
        // Filter out the contact that has an id of the contact which was clicked on
        //   (this contact is passed back to us from ListContacts OnClick function
        //   via "contact" that's passed into our removeContact function)
      ))
    }) );
  }

  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
        />
     </div>
    );
  }
}

export default App;

