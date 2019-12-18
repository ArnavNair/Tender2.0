# HackOff v2.0: Team BitsPlease 
This project represents Team BitsPlease's solution for the Blockchain task for Hackoff v2.0 Hackathon held at VIT Vellore on 14th and 15th December, 2019.

It contains 2 datasets related to the Indian Government. The first is the Government expenditure on Finance between the years 1980 and 2016, while the second is
Government expenditure on military resources, between the years 1960 and 2019. The military dataset is measured in USD, while the remaining files are measured in crore rupees.
These datasets are used to train the Machine Learning model, whose job is to predict the expected expenditure of the various departments
as recommendation for the Finance Department.

Additionally, it contains Smart Contracts written in Solidity, forming the logic of the application. This provides various functionalities and services to all members
of the ecosystem under consideration. This forms the core of the app. Usage of the app in any way implies execution of a Smart Contract transaction, which is written into
the underlying blockchain(in this case, we chose to use the Ethereum platform for development of the DApp). The properties of the blockchain ensure that every transaction written
into it are immutable and transparent, thus achieving the goal of imposing better control of, and oversight on, government expenditure.


# Status Update
The Machine Learning models have been designed and trained, and are ready to be integrated with the backend to provide their predictions.
The Tender section of the Blockchain solution is completely ready and deployable. The Government Expenditure section of it has the
Smart Contract completely ready, and still needs its backend to be developed.
The next stages include integrating the ML, developing Government Expenditure's backend and integrating the two Blockchain components
to synchronize their workings, so that the funds diverted to any Government Department can be utilised to float and finalize a tender.
