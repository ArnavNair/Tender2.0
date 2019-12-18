Tender DApp
This is a DApp, built using Smart contracts (Solidity) on the Ethereum network, to decrease corruption and enhance transparency in the 
tender bidding process. Right now, the governmental agency awarding the tenders can indulge in corruption by accepting bribes from
a particular organisation and awarding them the tender in spite of poor proposals and high costs.
Our DApp, aims to solve this in two ways : 
 1. Makes sure that the bids are anonymous till the tender is awarded. The governmental agency/officer in charge of selecting the winning
    bid will not be aware of which company made which bid, as they will only be displayed a list of proposal and their bids. So, this will
    ensure that the best bid is picked.
 2. After the bid is awarded, to increase the transparency of the process, anyone will be able to view the details of the tender, and 
    all the details of the bids( bidder, bid amount and proposal) so that it is clear why the winning bid was chosen.

To run the web application, follow the given steps:
1. Clone the files into a folder.
2. Download the MetaMask extension and create a few dummy accounts to test the functionality.
3. In the terminal, run the commands "node compile.js" with tender/ethereum as the working directory. Run "node deploy.js" and
   copy the address that is given as output and plug it into the placeholder in tender/ethereum/factory.js.
4. Now, run "npm run dev" with tender as the working directory and navigate to localhost:3000 in your browser
5. Enjoy running the app!