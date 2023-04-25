import Image from "next/image";
import { useState } from "react";
import Router from "next/router";

export default function Card() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolderName, setCardHolderName] = useState("Card Holder");
  const [mm, setMM] = useState("00");
  const [yy, setYY] = useState("00");
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function handleCardNumberChange(e) {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
  }

  const handleButtonClick = () => {
    setIsButtonClicked(false)
    Router.reload()
  }

  const ButtonClick = () => {
    return(
      <div className="mx-auto text-center mt-10 md:right-[30rem] md:top-60 md:w-[30%] md:absolute">
        <Image src="icon-complete.svg" width={100} height={100} alt="Complete icon" className="mx-auto"/>
        <h2 className="text-black tracking-widest font-semibold text-3xl mt-5">THANK YOU!</h2>
        <p className="text-slate-500 font-light tracking-wider mt-3">We've added  your card details</p>
        <button className="bg-[#21092F] text-white w-[90%] text-center h-[3rem] rounded-lg mt-10 mx-auto" type="submit" onClick={handleButtonClick}>Continue</button>
      </div>
    )

  }


    function handleKeyPress(e){
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/^\d+$/.test(keyValue)) {
      e.preventDefault();
    }
}
  const CardItself = () => {
    return(
        <div className="relative w-[80%] ml-4 shadow-2xl md:w-[25%] md:absolute md:top-40 md:left-28 ">
        <Image
          src="/bg-card-front.png"
          width={300}
          height={200}
          alt="Credit Card"
          className="w-[100%]"
        />
        <div className="text-white">
            <Image src= "/card-logo.svg" alt="Card Logo"  width={50} height={40} className="absolute top-4 left-4 md:w-[6rem]"/>
          <p className="bottom-12 left-4 absolute text-xl font-light tracking-wider md:bottom-20 md:left-8 md:font-bold md:text-3xl">{cardNumber}</p>
          <p className="absolute bottom-4 left-4 font-extralight tracking-wider text-xs uppercase md:bottom-10 md:left-8">{cardHolderName}</p>
          <p className="absolute bottom-4 right-6 font-light tracking-wider text-xs md:bottom-10 md:right-12">{`${mm}/${yy}`}</p>
        </div>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(yy > 50 || yy < 23){
        alert("Year must be between 23 and 50.")
    } else if (mm > 12 || mm <= 0){
        alert("Month must be between 1 and 12")
      }else{
      setIsButtonClicked(!isButtonClicked)
    }
  }

  return (
    <div>
    <CardItself />
    {isButtonClicked ? <ButtonClick /> : 
    <form className="text-black w-[90%] mx-auto mt-10 font-semibold tracking-wider md:absolute md:right-[30rem] md:top-60 md:w-[30%]" onSubmit={handleSubmit}>

      <div className="flex flex-col">
        <label htmlFor="cardHolderName" className="mb-2 text-sm">CARDHOLDER NAME</label>
        <input
          name="cardHolderName"
          id="cardHolderName"
          required
          className="border-solid border-gray-300 border-[1px] h-[2.5rem] rounded-lg px-3"
          type="text"
          maxLength="25"
          onChange={(e) => setCardHolderName(e.target.value)}
          placeholder="e.g. Sinan Koyuncu"
        />
      </div>

      <div className="flex flex-col mt-5">
        <label className="mb-2 text-sm" htmlFor="cardNumber">CARD NUMBER</label>
        <input
          name="cardNumber"
          required
          className="border-solid border-gray-300 border-[1px] h-[2.5rem] rounded-lg px-3"
          id="cardNumber"
          type="text"
          maxLength="16"
          onChange={handleCardNumberChange}
          placeholder="e.g. 1234 5678 9123 0000"
          onKeyPress={handleKeyPress}
        />
      </div>

      <section className="grid grid-cols-4 mt-5 items-center">

      <div className="flex flex-col col-span-1">
        <label className="mb-2 text-sm" htmlFor="mm">EXP. DATE</label>
        <input
          name="mm"
          id="mm"
          required
          maxLength="2"
          minLength="2"
          className="border-solid border-gray-300 border-[1px] h-[2.5rem] rounded-lg px-3 mr-5"
          type="type"
          onKeyPress={handleKeyPress}
          onChange={(e) => setMM(e.target.value)}
          placeholder="MM"
        />
      </div>

      <div className="flex flex-col col-span-1">
      <label className="mb-2 text-sm -ml-3" >(MM/YY)</label>
        <input
          name="yy"
          required
          maxLength="2"
          className="border-solid border-gray-300 border-[1px] h-[2.5rem] rounded-lg px-3 mr-5"
          minLength="2"
          type="text"
          pattern="[0-9]*"
          min="23"
          max="50"
          onChange={(e) => setYY(e.target.value)}
          placeholder="YY"
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className="flex flex-col col-span-2">
        <label className="mb-2 text-sm">CVC</label>
        <input
          required
          maxLength="3"
          className="border-solid border-gray-300 border-[1px] h-[2.5rem] rounded-lg px-3 w-[100%]"
          minLength="3"
          type="text"
          placeholder="e.g. 123"
        />
      </div>
      </section>

      <button className="bg-[#21092F] text-white w-[100%] text-center h-[3rem] rounded-lg mt-5 mx-auto" type="submit">Confirm</button>

    </form>
  }
    </div>
  );
}
