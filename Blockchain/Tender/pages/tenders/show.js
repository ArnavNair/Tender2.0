/* This file is used to render the webpage where the basic details (address of the
   manager, number of bids made, and the requirements of the tender) are displayed,
   with options to:
   1. View individual bids (ONLY THE MANAGER CAN DO SO)
   2. Bid for the tender (ANYONE EXCEPT MANAGER)
   3. Finalize the winning bid (ONLY MANAGER)
   4* View all details of bids (including the address of the bidder) to EVERYONE, ONLY 
      AFTER THE TENDER HAS BEEN AWARDED.
      Will contain the index of the winning bid, after the bid has been awarded
*/


import React, { Component } from "react";
import Layout from "../../components/Layout";
import Tender from "../../ethereum/tender";
import { Card, Grid, Button, Form, Input, Message } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";;
import { Link } from "../../routes";

class TenderShow extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false,
    index: "",
    winner: ""
  };
  static async getInitialProps(props) {
    const tender = Tender(props.query.address);
    //const data = await tender.methods.data().call();
    const winner = await tender.methods.winIndex().call();
    const summary = await tender.methods.getSummary().call();
    console.log(summary);
    const isComplete = await tender.methods.complete().call();
    return {
      address: props.query.address,
      description: summary[1],
      manager: summary[0],
      count: summary[2],
      isComplete: isComplete,
      winner,
      verify: true
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    const tender = Tender(this.props.address);
    this.setState({ loading: true });
    try {
      const accounts = await web3.eth.getAccounts();
      await tender.methods.verify().send({
        from: accounts[0]
      });

      Router.replaceRoute(
        `/tenders/${this.props.address}/viewbids/${this.state.value}`
      );
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };

  onClick = async event => {
    event.preventDefault();
    Router.replaceRoute(`/tenders/${this.props.address}/finalBid`);
  };

  renderCards() {
    const { manager, description, count } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of manager",
        description:
          "The manager floated this tender and decides who to award the tender to.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: "Project description",
        meta: "A brief description and summary of requirements.",
        description: description
      },
      {
        header: count,
        meta: "Number of bidders",
        description:
          "Number of vendors/suppliers who have already placed their bids."
      }
    ];
    return <Card.Group items={items} />;
  }
  
  render() {
    
    const { isComplete } = this.props;
    if (isComplete) {
      return (
        <Layout>
          <h3>Campaign Show</h3>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            </Grid.Row>
            <Grid.Column width={10}>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <label>Enter Bid Index to be viewed:</label>
                  <Input
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ value: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessage}
                />
                <Button
                  disabled={isComplete}
                  primary
                  loading={this.state.loading}
                >
                  View!
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Row>
              <Grid.Column width={5}>
                <Link route={`/tenders/${this.props.address}/bid`}>
                  <a>
                    <Button disabled={isComplete} primary>
                      Bid for this project
                    </Button>
                  </a>
                </Link>
              </Grid.Column>
              <Grid.Column width={5}>
                <Link route={`/tenders/${this.props.address}/finalize`}>
                  <a>
                    <Button disabled={isComplete} primary>
                      Finalize the Winning Bid!
                    </Button>
                  </a>
                </Link>
              </Grid.Column>
              <Grid.Column width={5}>
                <Button disabled={!isComplete} onClick={this.onClick} primary>
                  View all details of bids!
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>the index of the winner is: {this.props.winner}</Grid.Row>
          </Grid>
        </Layout>
      );
    } else {
      return (
        <Layout>
          <h3>Campaign Show</h3>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            </Grid.Row>
            <Grid.Column width={10}>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <label>Enter Bid Index to be viewed:</label>
                  <Input
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ value: event.target.value })
                    }
                  />
                </Form.Field>
                <Message
                  error
                  header="Oops!"
                  content={this.state.errorMessage}
                />
                <Button
                  disabled={isComplete}
                  primary
                  loading={this.state.loading}
                >
                  View!
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Row>
              <Grid.Column width={5}>
                <Link route={`/tenders/${this.props.address}/bid`}>
                  <a>
                    <Button disabled={isComplete} primary>
                      Bid for this project
                    </Button>
                  </a>
                </Link>
              </Grid.Column>
              <Grid.Column width={5}>
                <Link route={`/tenders/${this.props.address}/finalize`}>
                  <a>
                    <Button disabled={isComplete} primary>
                      Finalize the Winning Bid!
                    </Button>
                  </a>
                </Link>
              </Grid.Column>
              <Grid.Column width={5}>
                <Button disabled={!isComplete} onClick={this.onClick} primary>
                  View all details of bids!
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Layout>
      );
    }
  }
}

  

export default TenderShow;
