"use strict";

// This file contains the routing directory of the application. 

var routes = require("next-routes")();

routes.add("/tenders/new", "/tenders/new").add("/tenders/:address", "tenders/show").add("/tenders/:address/bid", "/tenders/bidForm").add("/tenders/:address/viewbids/:index", "tenders/viewbids").add("/tenders/:address/finalize", "/tenders/finalize").add("/tenders/:address/finalBid", "/tenders/final").add("/tenders/:address/final/:index", "/tenders/viewbidsfinal");
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGdCQUN1QixBQUR2QixnQkFFRyxBQUZILElBRU8sQUFGUCxxQkFFNEIsQUFGNUIsZ0JBR0csQUFISCxJQUdPLEFBSFAseUJBR2dDLEFBSGhDLG9CQUlHLEFBSkgsSUFJTyxBQUpQLHFDQUkyQyxBQUozQyxvQkFLRyxBQUxILElBS08sQUFMUCw4QkFLcUMsQUFMckMscUJBTUcsQUFOSCxJQU1PLEFBTlAsOEJBTXFDLEFBTnJDLGtCQU9HLEFBUEgsSUFPTyxBQVBQLGtDQU95QyxBQVB6QztBQVFBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvZGhpcmEvRGVza3RvcC90ZW5kZXIifQ==