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
      <div className='float-end'>
        <ConnectWallet style={{ height: '5rem', marginTop: '10px', marginRight: '50px' }} />
      </div>
      <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2  text-[14px] text-center mt-2 lg:h-[70vh] lg:max-h-[70vh] sm:max-h-[70vh] p-[3rem] pb-1 m-2 sm:w-2/3 md:w-1/2 lg:w-1/2
                       xl:w-1/2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700">

          <div>
            <div className=" mt-8">
          <StartGame />
          </div>
          <div className=" mt-4">
          <PickCard />
          </div>
          <div className=" mt-4">
          <EndGame />
          </div>
        </div>

        <div className="mt-8 ml-16">
          <Card number={currentCard} suit = {suit}/>
        </div>
      </div>
      </div>
    </div>
  );
}
