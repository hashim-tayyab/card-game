import {useContract, useContractWrite, Web3Button } from "../ThirdwebProvider";
import contractABI from "../../abi/abi.json";
import { contractAddress } from "../ThirdwebProvider";
import { useState } from "react";
import MainButton from "../common/mainButton/MainButton";
import InputBox from "../common/inputBox/InputBox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StartGame = () => {

    const { contract,  isLoading, error } = useContract(contractAddress, contractABI);
    const { mutateAsync, isLoading:startGameLoading,  error:startGameError  } = useContractWrite(contract, "StartGame",);

    const [players, setPlayers] = useState('');
    const [playersArray, setPlayersArray] = useState(['']);

    const addPlayerAddress = () => toast.error("Add Player Address First!");
    const startError = () => toast.error("Unable to start game! Try again");
    const startInvalidArgument = () => toast.error("You need to add Players to start game!!");
    const invalidAddress = () => toast.error("Enter a valid address!!");

    const gameStarting= () => toast.success("Confirm to Start Game!");



    const handleAddArray = () => {
        if (players == ''){
            addPlayerAddress();
        } 
        else if(players.length!= 42){
            invalidAddress();
        }
        else{
            const newArr = players.split(',');
            setPlayersArray(newArr);
            console.log(newArr);
        }
      };

      if(startGameError){
        if(startGameError.code == 'INVALID_ARGUMENT'){
            startInvalidArgument()
        }
        else{
            startError();
        }
      }

    return (
        <div>
            <ToastContainer />   
            <div>
                <InputBox
                    value={players}
                    onChange={(e: any) => setPlayers(e.target.value)}
                    placeholder="Enter Address"

                />
                <MainButton text={"Add Player"} onClick={handleAddArray} />
                <br/>
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


