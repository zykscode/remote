import Image from "next/image";
import React from "react";
import Check from "../public/static/images/tick-circle.png"


function Hiw({text}:{text:string}) {
  return (
    <div className="hiw-checkbox">
      <Image alt="checkbox" src={Check}/>
      <span>
        {text}
      </span>
    </div>
  );
}

export default Hiw;
