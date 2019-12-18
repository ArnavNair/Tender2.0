/* The contract address generated in deploy.js is used here to create and
   export an instance of tenderFactory at the given address.
*/

import web3 from "./web3";
import TenderFactory from "./build/tenderFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(TenderFactory.interface),
  "0x4D0CA112775221B110A13fD92564c479049756E3"
);

export default instance;
