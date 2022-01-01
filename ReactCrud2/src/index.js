import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { log } from './logger';

class App extends React.Component {
      clientInput = React.createRef();
      state = {
            clients: [
                  { id: 1, nom: 'Bernard Dadier' },
                  { id: 2, nom: 'Albert Dubois' },
                  { id: 3, nom: 'Ducobus Danois' }
            ],
      }
      handleDelete = (id) => {
            const clients = this.state.clients.slice();
            const index = clients.findIndex( client => client.id === id);

            clients.splice(index, 1);
            this.setState({ clients: clients });
      }

      handleSubmit(event) {
            event.preventDefault();
            log(this.clientInput);
      }


      render()
      {
            let title = "Liste de client";
            
            return (
                  <div>
                        <h1>{title}</h1>
                        <ul>
                              {this.state.clients.map(client => (
                                    <li key={client.id}>
                                          {client.nom} <button onClick= {()=> this.handleDelete(client.id)}>X</button>
                                    </li>
                              ))}
                        </ul>
                        <form action="" onClick={this.handleSubmit}>
                              <input ref={this.clientInput} type="text" placeholder='ajouter un client' />
                              <button>Confirmer</button>
                        </form>
                  </div>
            );
      }
}


const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);