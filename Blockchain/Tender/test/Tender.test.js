// Basic testing script of the contract - The rest of the testing is done on REMIX IDE

const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const compiledFactory = require("../ethereum/build/tenderFactory.json");
const compiledTender = require("../ethereum/build/Tender.json");

let accounts;
let factory;
let tenderAddress;
let tender;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "4000000" });

  await factory.methods.createTender("No requirements").send({
    from: accounts[0],
    gas: "4000000"
  });
  [tenderAddress] = await factory.methods.getDeployedTenders().call();

  tender = await new web3.eth.Contract(
    JSON.parse(compiledTender.interface),
    tenderAddress
  );
});

describe('Tenders', () => {
    require("events").EventEmitter.defaultMaxListeners = 0;
  
    it('deploys a factory and a tender', () => {
        assert.ok(factory.options.address);
        assert.ok(tender.options.address);
    });

    it('manager is set properly', async () =>{
        const manager = await tender.methods.manager().call();
        assert.equal(accounts[0],manager);
    });
    
});
