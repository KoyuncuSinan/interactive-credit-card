import Image from "next/image";
import { useState } from "react";

export default function Card() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolderName, setCardHolderName] = useState("Card Holder");
  const [mm, setMM] = useState("00");
  const [yy, setYY] = useState("00");

  function handleCardNumberChange(e) {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
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
        <div className="relative w-[80%] ml-4 shadow-2xl">
        <Image
          src="/bg-card-front.png"
          width={300}
          height={200}
          alt="Credit Card"
          className="w-[100%]"
        />
        <div className="text-white">
            <Image src= "/card-logo.svg" alt="Card Logo"  width={50} height={40} className="absolute top-4 left-4"/>
          <p className="bottom-12 left-4 absolute text-xl font-light tracking-wider">{cardNumber}</p>
          <p className="absolute bottom-4 left-4 font-extralight tracking-wider text-xs uppercase">{cardHolderName}</p>
          <p className="absolute bottom-4 right-6 font-light tracking-wider text-xs">{`${mm}/${yy}`}</p>
        </div>
      </div>
    )
  }

  return (
    <>
    <CardItself />
    <form className="text-black w-[90%] mx-auto mt-10 font-semibold tracking-wider">

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
          max="50"
          min="23"
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
          type="number"
          placeholder="e.g. 123"
        />
      </div>
      </section>

      <button className="bg-[#21092F] text-white w-[100%] text-center h-[3rem] rounded-lg mt-5 mx-auto">Confirm</button>

    </form>
    </>
  );
}
