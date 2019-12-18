// Despite being quite out of date, version 0.4.17 was chosen, as 0.5.x has intricacies w.r.t. 
// 'payable' certificate instances that was causing issues
pragma solidity ^0.4.17; 

contract TaxPool{

    /* This contract represents a central tax pool where all users' taxes are stored */

    // Fallback function 
    function() public payable {
    }

    // Function to return current tax pool total
    function displayTotal() public view returns(uint256){
        return this.balance;
    }

    // Function to send funds from the tax pool to a department
    function sendFunds(address receiver, uint amount) public {
        receiver.transfer(amount);
    }
}

contract GovernmentExpenditure{
    /* State Variables */
    address finDept; //Address of the Finance Department
    TaxPool taxPool =  new TaxPool(); // Instance of the TaxPool contract, used to interact with its functions
    uint taxRate; // Fixed rate for tax collection

    //Structure representing a single bank entity
    struct Bank{
        uint numCustomers; // Number of customers the bank has
        uint[] customers; //Stores the balances of the given bank's customers
    }

    //Create and store bank info
    mapping(uint => Bank) banks; // Mapping to store the banks
    uint bankID = 0; // Used to assign each bank an ID

    // Create and store info on the government departments
    address[] depts; // Array storing the addresses of the various departments
    uint numDepts = 0; // Used to assign each department an ID


    // Modifier to ensure certain actions can only be performed by the Finance Department
    modifier onlyFinDept(){
        require(msg.sender == finDept);
        _;
    }

    // Constructor to be called by the Finance Department at the time of contract instantiation
    function GovernmentExpenditure() public{
        finDept = msg.sender;
    }

    // Function to allow the Finance Department to set the tax rate
    function setTaxRate(uint _taxRate) public onlyFinDept{
        // Validate the tax rate
        require(_taxRate > 0);

        taxRate = _taxRate;
    }

    // Function to let the Finance Department register a bank, returning the bank's ID
    function registerBank() public onlyFinDept returns(uint){
        // Instantiate a new bank entity
        uint[] memory emptyArray;
        banks[bankID] = Bank({numCustomers: 0, customers: emptyArray});

        // Return the registered bank's new ID
        return bankID++;
    }

    // Function to register a bank user and return his/her newly generated customer ID
    function registerBankUser(uint _bankID) public returns(uint){
        // Validate the bank ID
        require(_bankID < bankID);

        ++(banks[_bankID].numCustomers);
        (banks[_bankID]).customers.push((msg.sender).balance);
    
        return (banks[_bankID]).customers.length - 1;
    }

    // Function to let the Finance Department register a department
    function registerGovDept(address _deptAddress) public onlyFinDept{
        // Instantiate a new department entity
        depts.push(_deptAddress);
    }

    // Function to allow the Finance Department to allocate funds to a given department from the total tax collected
    function allocateFunds(uint _deptID, uint _funds) public onlyFinDept{
        // Ensure that the entered department ID exists and that the funds collected are available
        require(_deptID < numDepts);
        require(_funds <= taxPool.displayTotal());

        // Re-locate the necessary funds
        taxPool.sendFunds(depts[_deptID], _funds);
    }

    // Function to allow a customer to withdraw his/her funds
    function transferCustomerFunds(uint _bankID, uint _customerID, uint amount, address receiver) public payable {
        // Ensure a valid bank ID and customer ID is given
        require(_bankID < bankID);
        require(_customerID < banks[_bankID].numCustomers);

        // Ensure that the customer has sufficient bank balance
        require(banks[_bankID].customers[_customerID] >= amount);

        //Send the customer's funds to the desired location
        banks[_bankID].customers[_customerID] -= amount;
        receiver.transfer(amount);
        (msg.sender).transfer(this.balance);
    }

    // Function for a customer to pay tax
    function payTax(uint _bankID, uint _customerID) public payable {
        // Ensure a valid bank ID and customer ID is given
        require(_bankID < bankID);
        require(_customerID < banks[_bankID].numCustomers);
        require(taxRate > 0);

        // Send the necessary tax to the Tax Pool
        uint tax = 0;
        tax = banks[_bankID].customers[_customerID] * (taxRate / 100);
        banks[_bankID].customers[_customerID] -= tax;
        taxPool.transfer(tax);
        (msg.sender).transfer(this.balance);
    }
    
    // Function to display tax pool total 
    function displayTaxPool() public view returns(uint) {
        return taxPool.displayTotal();
    }
}
