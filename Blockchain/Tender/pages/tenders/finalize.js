// It renders a form to choose the most feasible bid and award the bid

import React, { Component } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react";
import Tender from "../../ethereum/tender";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import Layout from '../../components/Layout';

class FinalizeBid extends Component {
  state = {
    index: "",
    value: "",
    errorMessage: "",
    loading: false
  };
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }
  onSubmit = async event => {
    event.preventDefault();
    const tender = Tender(this.props.address);
    this.setState({ loading: true });
    try {
      const accounts = await web3.eth.getAccounts();

      await tender.methods.finalizeBid(this.state.index).send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
      Router.replaceRoute(`/tenders/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };

  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Amount to contribute to the contract</label>
            <Input
              label="ether"
              labelPosition="right"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Index of the bid chosen</label>
            <Input
              value={this.state.index}
              onChange={event => this.setState({ index: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Contribute!
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default FinalizeBid;
