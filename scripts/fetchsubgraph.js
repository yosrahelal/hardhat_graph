//import the node-fetch package
const fetch = require('node-fetch');
require("dotenv").config();

/*
* Function to fetch a list of withdrawals from the number
* Parameter:
*     _number - Number of withdrawals required
*/
async function getWithdrawsList(_number){
    //set the query url
    var queryURL = process.env.THE_GRAPH_URL;
    //define the query to fetch a list of ten tokens 
    var withdrawGraphQuery = `query {
            withdrawals(first: ${_number}){
                            id
                            amount
                            when
                            blockNumber
                            transactionHash
                        }
            }`  
    //set the request options                    
    var options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: withdrawGraphQuery
      })
    }
    //get the response
    var response = await fetch(queryURL,options)
    //parsing the body text as JSON 
    var queryResult =  await response.json()
    //display the list of withdrawals
    console.log(queryResult["data"]["withdrawals"]);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
getWithdrawsList(5).catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  