import React from 'react';
import { FormControl, FormGroup, ButtonToolbar, Button, Grid, Row, Col } from 'react-bootstrap';

class InsertDoc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      email: "",
      phone: "",
      company: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInsertClick = this.handleInsertClick.bind(this);
  }

  handleInsertClick = event => {
    event.preventDefault();
    const insertObj = {
      name: this.state.name,
      age: parseInt(this.state.age, 10), 
      company: this.state.company,
      email: this.state.email,
      phone: this.state.phone
    };
    this.props.handleInsertClick(insertObj);
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h4>Insert into the DB</h4>
        <Grid >
          <Row className="show-grid">
            <Col md={3}>
            <form >
              <FormGroup controlId="formBasicText" >
                <FormControl
                  type="text"
                  value={this.props.name}
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                  />
                
                <FormControl
                  type="number"
                  value={this.props.age}
                  name="age"
                  placeholder="Age"
                  onChange={this.handleChange}
                  />
                
                <FormControl
                  type="email"
                  value={this.props.email}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  />
                
                <FormControl
                  type="phone"
                  value={this.props.phone}
                  name="phone"
                  placeholder="Phone"
                  onChange={this.handleChange}
                  />
                
                <FormControl
                  type="text"
                  value={this.props.company}
                  name="company"
                  placeholder="Company"
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <div>
                <ButtonToolbar>
                  <Button 
                    type="submit" 
                    bsStyle="primary" 
                    bsSize="small"
                    onClick={this.handleInsertClick}>
                    Save
                  </Button>

                  <Button 
                    type="submit" 
                    onClick={this.props.closeModal}
                    bsStyle="primary" 
                    bsSize="small">
                    Cancel
                  </Button>
                </ButtonToolbar>
              </div>
            </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default InsertDoc;
