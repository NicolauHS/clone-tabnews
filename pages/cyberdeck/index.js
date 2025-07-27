import Prompt from "../../components/Prompt";
import Display from "../../components/Display";

import { useEffect } from "react";

function Deck() {
  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.id !== "prompt") {
        const input = document.getElementById("prompt");
        if (input) input.focus();
      }
    };

    document.addEventListener("click", handleClick);
  }, []);

  return (
    <>
      <h1 className="">This is my cyberdeck!</h1>
      <Prompt></Prompt>
      <Display></Display>
    </>
  );
}

export default Deck;
