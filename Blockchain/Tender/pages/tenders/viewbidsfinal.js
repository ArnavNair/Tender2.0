/* This file renders the webpage that is reponsible for displaying the FULL DETAILS
   of the bids, after the winning bid has been awarded. ANYONE can view these bids' details
   to ensure complete TRANSPARENCY in the process
*/

import React, { Component } from "react";
import Layout from "../../components/Layout";
import Tender from "../../ethereum/tender";
import { Card, Grid, Button } from "semantic-ui-react";


class BidDisplay extends Component {
 
  
  static async getInitialProps(props) {
    const tender = Tender(props.query.address);
    const index = props.query.index;
    const complete = await tender.methods.complete().call();
    console.log(complete);
    const bid = await tender.methods.getBidSummary(index).call();
    return {
      bidAddress: bid[0],
      bidAmount: bid[1],
      description: bid[2],
      complete
    };
  }

  renderCards() {
    const { bidAddress, bidAmount, description} = this.props;
    const items = [
      {
        header: bidAddress,
        meta: "Address of the bidder.",
        description: "The unique address of the bidder.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: bidAmount,
        meta: "Bid Amount",
        description: "The price of the bid made by the bidder."
      },
      {
        header: description,
        meta: "Description",
        description: "Proposal of the bidder."
      }
    ];
    return <Card.Group items={items} />;
  }

  render() {
      const{complete} = this.props;
      if(complete){
        return (<Layout>
        <h3>Bid Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
        }
        else
        {
          return(<h3>Error.</h3>)
        }
  }
}

export default BidDisplay;
