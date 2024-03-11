'use client';
import PickCard from "@/components/pickCard/PickCard";
import { ConnectWallet } from "../components/ThirdwebProvider";
import StartGame from "@/components/startGame/StartGame";
import EndGame from "@/components/endGame/EndGame";
import Card from "@/components/card/Card";
import { useCardContext } from "./Context/context";

export default function Home() {

  const {currentCard, setCurrentCard,  suit} = useCardContext();

  return (
    <div className="h-[100vh] bg-slate-700">
            <div className='flex justify-center'>
                <h1 className='text-4xl font-bold text-center text-white'>Card Game</h1>
            </div>
      <div className=' md:float-end justify-center flex sm:content-center'>
        <ConnectWallet style={{ height: '5rem', marginTop: '10px', marginRight: '2rem' }} />
      </div>
      <div className="flex justify-center items-center h-screen mt-[-4rem] lg:mt-0">
      <div className="grid grid-cols-2  text-[14px] text-center lg:mt-2 lg:h-[70vh] lg:max-h-[70vh] sm:max-h-[70vh] h-[60vh] md:p-[3rem] p-[1rem] pb-1 m-2 md:w-1/2 lg:w-1/2
                       xl:w-1/2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700">

          <div>
            <div className=" mt-0 sm:ml-[-2rem] sm:mt-0 lg:ml-0 lg:mt-8">
          <StartGame />
          </div>
          <div className=" mt-4">
          <PickCard />
          </div>
          <div className=" mt-4">
          <EndGame />
          </div>

          {/* <div><DialogDefault/></div> */}
        </div>

        <div className="mt-8 md:ml-16 ml-2">
          <Card number={currentCard} suit = {suit}/>
        </div>
      </div>
      </div>
    </div>
  );
}
