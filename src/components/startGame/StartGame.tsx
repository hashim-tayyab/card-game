import {useContract, useContractWrite, Web3Button } from "../ThirdwebProvider";
import contractABI from "../../abi/abi.json";
import { contractAddress } from "../ThirdwebProvider";
import { useState } from "react";
import MainButton from "../common/mainButton/MainButton";
import InputBox from "../common/inputBox/InputBox";

const StartGame = () => {

    const { contract,  isLoading, error } = useContract(contractAddress, contractABI);
    const { mutateAsync, isLoading:startGameLoading,  error:startGameError  } = useContractWrite(contract, "StartGame",);

    const [players, setPlayers] = useState('');
    const [playersArray, setPlayersArray] = useState(['']);


    const handleAddArray = () => {
        const newArr = players.split(',');
        setPlayersArray(newArr);
        console.log(newArr);
      };

    return (
        <div>
            <div>
                <InputBox
                    value={players}
                    onChange={(e: any) => setPlayers(e.target.value)}
                    placeholder="Enter Address"

                />
                <MainButton text={"Add Players"} onClick={handleAddArray} />
            </div>

            <div>
                <Web3Button
                    contractAddress={contractAddress}
                    action={() => mutateAsync({ args: [playersArray] })}>
                    Start Game
                </Web3Button>
            </div>
        </div>
    )
}

export default StartGame


