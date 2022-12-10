import React from "react";
import Hiw from "../Components/Hiw";

type Props = {};

const Texts = [
  {
    name: "1 text",
    text: "No design skill needed. Choose from a variety of stunning templates.",
  },
  { name: "2 text", text: "Edit template to your preferred lookand feel." },
  { name: "3 text", text: "Create and Send single and bulk certificate." },
];

const HowItWorks = (props: Props) => {
  return <div className='hiw'>{Texts.map((text)=>{
    return <Hiw key={text.name} text={text.text}/>
  })}</div>;
};

export default HowItWorks;
