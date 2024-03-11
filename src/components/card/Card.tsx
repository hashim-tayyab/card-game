import React from 'react'

const Card = ({ number, suit }: any) => {
    var suitIcon;
    //Diamond
    if (suit == 1 ){
        suitIcon = 
<svg fill="#FF0000" width="5rem" height="5rem" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" id="diamond">
  <path d="M7.03715 1.20147L2.12542 6.7C2.04962 6.78393 2.00568 6.89005 2.00051 7C1.99535 7.10994 2.02925 7.21013 2.09689 7.3L7.0065 13.7601C7.06233 13.8343 7.13629 13.8947 7.22216 13.9365C7.30803 13.9782 7.40331 14 7.5 14C7.59669 14 7.69197 13.9782 7.77784 13.9365C7.86371 13.8947 7.93766 13.8343 7.9935 13.7601L12.9031 7.3C12.9707 7.21013 13.0047 7.10994 12.9995 7C12.9943 6.89005 12.9504 6.78393 12.8746 6.7L7.96285 1.20147C7.90591 1.13833 7.83501 1.08761 7.75508 1.05282C7.67514 1.01802 7.5881 1 7.5 1C7.4119 1 7.32486 1.01802 7.24492 1.05282C7.16499 1.08761 7.09409 1.13833 7.03715 1.20147Z"/>
</svg>

    }
    //Heart
    else if(suit == 2){
        suitIcon = <svg width="5rem" height="5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/1999/02/22-rdf-syntax-ns#"  version="1.1">
        <g transform="translate(0 -1028.4)">
         <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#e74c3c"/>
        </g>
       </svg>
    }
    // Spade
    else if(suit == 3){
      suitIcon =  <svg fill="#000000" width="5rem" height="5rem" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
  <path d="M232,140a55.99915,55.99915,0,0,1-81.90137,49.64941l11.94092,35.82129A7.99929,7.99929,0,0,1,154.4502,236H101.5498a7.99966,7.99966,0,0,1-7.58935-10.53027l11.94092-35.82032A55.99915,55.99915,0,0,1,24,140C24,86.42676,121.68555,23.292,125.84375,20.63086a3.9978,3.9978,0,0,1,4.3125,0C134.31445,23.292,232,86.42676,232,140Z"/>
</svg>
    }
    // Club
    else if(suit == 4 ){
        suitIcon = <svg fill="#000000" width="5rem" height="5rem" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
        <path d="M232,148a52.00505,52.00505,0,0,1-80.459,43.52539l10.6538,34.08789A7.99984,7.99984,0,0,1,154.55908,236H101.44092a7.99954,7.99954,0,0,1-7.63526-10.38672L104.45459,191.542a51.7046,51.7046,0,0,1-29.9624,8.43653c-27.72657-.78516-50.377-24.00489-50.4917-51.75977A51.99976,51.99976,0,0,1,76,96q2.02881,0,4.04883.15625a52.00294,52.00294,0,1,1,95.89648,0,53.33621,53.33621,0,0,1,5.46387-.1377A51.70261,51.70261,0,0,1,232,148Z"/>
      </svg>
    }
    return (
        <div className="bg-white rounded-lg shadow-lg md:p-4 sm:w-30 h-40 md:h-60 relative mt-14 md:mt-0">
            {/* <!-- Top-left number --> */}
            <div className="absolute top-2 left-2 text-gray-600 text-[3rem] font-bold">{number}</div>

            {/* <!-- Bottom-right number --> */}
            <div className="absolute bottom-2 right-2 text-gray-600 text-[3rem] font-bold">{number}</div>

            {/* <!-- Icon in center --> */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {suitIcon}
            </div>
        </div>
    )
}

export default Card