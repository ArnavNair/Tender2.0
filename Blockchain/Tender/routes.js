// This file contains the routing directory of the application. 

const routes = require("next-routes")();

routes
  .add("/tenders/new", "/tenders/new")
  .add("/tenders/:address", "tenders/show")
  .add("/tenders/:address/bid", "/tenders/bidForm")
  .add("/tenders/:address/viewbids/:index","tenders/viewbids")
  .add("/tenders/:address/finalize", "/tenders/finalize")
  .add("/tenders/:address/finalBid", "/tenders/final")
  .add("/tenders/:address/final/:index", "/tenders/viewbidsfinal");
module.exports = routes;
