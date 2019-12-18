/* This file is used to render the form that asks for the index
   at which the desired bid to be seen is placed. (ONLY AFTER THE TENDER IS AWARDED)
*/

import React, { Component } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import Tender from "../../ethereum/tender";
import { Router } from "../../routes";
import Layout from "../../components/Layout";

class Final extends Component {
  state = {
    index: "",
  };
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();
    Router.replaceRoute(
      `/tenders/${this.props.address}/final/${this.state.index}`
    );
    const tender = Tender(props.query.address);
    
  };

  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Index of the bid to be viewed</label>
            <Input
              value={this.state.index}
              onChange={event => this.setState({ index: event.target.value })}
            />
          </Form.Field>
          <Button primary>View!</Button>
        </Form>
      
      </Layout>
    );
  }
}
export default Final;