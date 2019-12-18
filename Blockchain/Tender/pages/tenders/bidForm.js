/* This file is used to render the form resposnible for making a bid for
   a particular tender, contains a text box for the proposal, and one for
   the amount at which the bid is set
*/

import React, { Component } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Tender from "../../ethereum/tender";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";
import Layout from "../../components/Layout";

class BidNew extends Component {
  state = {
    bidAmount: "",
    description: "",
    loading: false,
    errorMessage : ''
  };

  onSubmit = async event => {
    event.preventDefault();

    const tender = Tender(this.props.address);
    const { bidAmount, description } = this.state;
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await tender.methods
        .makeBid(bidAmount, description)
        .send({ from: accounts[0] });
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

    static async getInitialProps(props) {
        const {address} = props.query;

        return { address };
    }
    
    render() {
        return (
        <Layout>
            <Link route={`/tenders/${this.props.address}`}>
            <a>
                Back 
            </a>
            </Link>

              
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
                <label>Description</label>
                <Input
                value={this.state.description}
                onChange={event =>
                    this.setState({ description: event.target.value })
                }
                />
            </Form.Field>
            <Form.Field>
                <label>Bid Amount</label>
                <Input
                value={this.state.bidAmount}
                onChange={event =>
                    this.setState({ bidAmount: event.target.value })
                }
                />
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button primary loading={this.state.loading} >Create!</Button>
            </Form>
        </Layout>
        );
}
}

export default BidNew;
