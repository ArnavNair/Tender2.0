/* This is the home page of the application - which contains all deployed tenders,
   with options to view extra details (View Tender)
*/

import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button, Menu } from "semantic-ui-react";
import { Link } from "../routes";
import Layout from "../components/Layout";


class TenderIndex extends Component {
  
  static async getInitialProps() {
    const tenders = await factory.methods.getDeployedTenders().call();
    return { tenders: tenders };
  }
  renderTenders() {
    const items = this.props.tenders.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/tenders/${address}`}>
            <a>View Tender</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <Link route="/tenders/new">
            <a>
              <Button
                content="Float a Tender"
                icon="add circle"
                primary
                floated="right"
              />
            </a>
          </Link>
          {this.renderTenders()}
        </div>
      </Layout>
    );
  }
}

export default TenderIndex;

