import React, { Component } from 'react';
import Header from './components/header/header'
import List from './components/todolist/list'
import { Button,Container, Input ,Row, Col  }  from 'reactstrap'

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     term: '',
     items: []
   };
}
onChange = (event) => {
    this.setState({term: event.target.value});
  }
  onSubmit = (event) => {
     event.preventDefault()
     this.setState({
       term: '',
       items: [...this.state.items, this.state.term]
     });
 }
  render() {
      return(
        <div>
          <Header/>
          <Container>
          <Row >
          <Col sm="12" md={{ size: 'auto', offset: 3 }}>
          <form  class="form-inline " onSubmit={this.onSubmit}>
          <Input placeholder="Cadastre sua Tarefa" onChange = {this.onChange}/>
            <Button action="Ha">
              Cadastrar
            </Button>
            </form>
            <List items={this.state.items}/>
          </Col>
        </Row>
            </Container>
        </div>
      );
  }
}


export default App;
