import {useContract, useContractWrite, Web3Button ,useContractEvents } from "../ThirdwebProvider";
import contractABI from "../../abi/abi.json";
import { contractAddress } from "../ThirdwebProvider";
import { useCardContext } from "@/app/Context/context";

const PickCard = () => {

    const {currentCard, setCurrentCard,  suit, setSuit} = useCardContext();



    const { contract, isLoading,  error } = useContract(contractAddress, contractABI);
    const { mutateAsync, isLoading: cardLoading,  error:cardError  } = useContractWrite( contract, "PickCard", );
    const { data, isLoading: cardEventLoading, error:cardEventError } = useContractEvents(contract, 
    "CardPicked",
    {
        queryFilter: {
          fromBlock: 'latest', // Events starting from this block
        },
        subscribe: true, // Subscribe to new events
      },
    );
    if(data?.length){
        setCurrentCard(data[0].data.card.number)
        setSuit(data[0].data.card._suits)
    }
  return (
    <div>
        
        <Web3Button
            contractAddress={contractAddress}
            action={() => mutateAsync({ args: [] })}
        >Pick a Card
        </Web3Button>
    </div>
  )
}

export default PickCard