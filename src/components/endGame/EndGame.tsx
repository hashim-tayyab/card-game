import {useContract, useContractWrite, Web3Button, useContractEvents } from "../ThirdwebProvider";
import contractABI from "../../abi/abi.json";
import { contractAddress } from "../ThirdwebProvider";
import {WinnerDialouge} from '../winnerDialouge/WinnerDialouge';
import { useState } from "react";




import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


const EndGame = () => {

  const { contract, isLoading, error } = useContract(contractAddress, contractABI);
const { mutateAsync,  isLoading:endGameLoading,  error:endGameError } = useContractWrite(contract,"endGame",);

const { data, isLoading:eventLoading, error:eventError } = useContractEvents(contract, 
  "GameWinner",
  {
    queryFilter: {
      fromBlock: 5440151, // Events starting from this block
      // toBlock: , // Events up to this block
      order: "desc", // Order of events ("asc" or "desc")
    },
    subscribe: true, // Subscribe to new events
  }
);

// if(data !== undefined){
//     console.log(data);
// }

const [open, setOpen] = useState(false);
 
const handleOpen = () => setOpen(!open);

  return (
<div>
      <Web3Button
          contractAddress={contractAddress}
          action={() => {
            mutateAsync({ args: [] }),
            handleOpen()
          }
        }
      >
          End Game
      </Web3Button>


      <Dialog className=" md:h-[30vh] md:w-fit md:ml-[30vw] mt-[35vh] h-[25vh]  border-[5px] border-stone-700" placeholder='' open={open} handler={handleOpen}>
        <DialogHeader placeholder=''>The Winner is:</DialogHeader>
        <DialogBody className=" text-xs" placeholder=''>{ data? data[0].data.finalWinner:''}</DialogBody>
        <DialogFooter placeholder=''>
          <button
            color="red"
            onClick={handleOpen}
            className="h-auto  bg-green-800 hover:bg-white text-white font-semibold hover:text-green-500 py-2 px-4 border border-green-900 hover:border-green-500 rounded"
          >
            <span>Okay</span>
          </button>
        </DialogFooter>
      </Dialog>


</div>


  )
}

export default EndGame