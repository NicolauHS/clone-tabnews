function Prompt() {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const display = document.getElementById("display");

      const prompt = document.createElement("p");
      prompt.textContent = "~$ " + event.target.value;

      display.appendChild(prompt);

      event.target.value = "";
    }
  };

  return (
    <>
      <p className="">
        ~$
        <input type="text" id="prompt" onKeyDown={handleKeyDown} />
      </p>
    </>
  );
}

export default Prompt;
