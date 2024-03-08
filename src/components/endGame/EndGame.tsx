import {useContract, useContractWrite, Web3Button, useContractEvents } from "../ThirdwebProvider";
import contractABI from "../../abi/abi.json";
import { contractAddress } from "../ThirdwebProvider";



const EndGame = () => {

  const { contract, isLoading, error } = useContract(contractAddress, contractABI);
const { mutateAsync,  isLoading:endGameLoading,  error:endGameError } = useContractWrite(contract,"endGame",);

const { data, isLoading:eventLoading, error:eventError } = useContractEvents(contract, 
  "GameWinner",
  {
    queryFilter: {
      fromBlock: 5440151, // Events starting from this block
      // toBlock: , // Events up to this block
      order: "asc", // Order of events ("asc" or "desc")
    },
    subscribe: true, // Subscribe to new events
  }
);

if(data !== undefined){
    console.log(data);
}


  return (
    <div>
      <Web3Button
          contractAddress={contractAddress}
          action={() => mutateAsync({ args: [] })}
      >
          End Game
      </Web3Button>
    </div>
  )
}

export default EndGame