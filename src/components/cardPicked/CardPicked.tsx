import {useContract, useContractRead, Web3Button } from "../ThirdwebProvider";
import contractABI from "../../abi/abi.json";
import { contractAddress } from "../ThirdwebProvider";
import { useEffect, useState } from "react";
import MainButton from "../common/mainButton/MainButton";
import InputBox from "../common/inputBox/InputBox";


const CardPicked = () => {

    const [shouldFetchCount, setShouldFetchCount] = useState(false);
    const [fetchData, setFetchData] = useState(false);

    const [detail, setDetail] = useState(false);
    const [fetchedData ,setFetchedData] = useState();


    const handleClick = () => {
        setShouldFetchCount(true);
    };


    const { contract, isLoading,  error } = useContract(contractAddress, contractABI);

    // const { data, isLoading:functionLoading, error:functionError } = useContractRead(contract, "ViewCardPicked",[], );

    useEffect(() => {
      if (fetchData) {
        const { data, isLoading: viewCardLoading, error: viewCardError } = useContractRead(contract, "ViewCardPicked", []);
        setFetchedData(data);
        // Handle the fetched data, loading state, and errors here
      }
    }, [fetchData, contract]);

    // useEffect(() => {
    //   if (!functionLoading && data) {
    //     const cardData = data;
    //     if (cardData) {
    //       setDetail(cardData);
    //       console.log(cardData);
    //     }
    //   }
    // }, [functionLoading, data]);


    // if (functionLoading) {
    //   return ""    
    // } 
    // if (functionError) {
    //   return ""    
    // } 

  return (
      <div onClick={handleClick}>                
        <Web3Button 
          contractAddress={contractAddress}
          action={() => ({ args: [] })}
      >
          View Card
      </Web3Button>
      <div>
        {shouldFetchCount? fetchedData: ""}
      </div>
      </div>
  )
}

export default CardPicked