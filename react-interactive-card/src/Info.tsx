import { useFormContext } from "react-hook-form";

function Info() {
  const { register, setValue } = useFormContext();

  return (
    <div className="flex flex-col mt-[4em] p-[0.5em] w-[327px] ml-auto mr-auto">
      <div className="w-full">
        <label className="font-['Space_Grotesk'] tracking-widest text-xs">
          CARDHOLDER NAME
        </label>
        <br />
        <input
          className="font-['Space_Grotesk'] border-2 rounded-lg p-[0.5em] w-full mt-[0.5em]"
          type="text"
          required
          placeholder={"e.g. Jane Appleseed"}
          {...register("theName")}
        />
      </div>
      <div className="w-full mt-[1em]">
        <label className="font-['Space_Grotesk'] tracking-widest text-xs">
          CARD NUMBER
        </label>
        <br />
        <input
          className="font-['Space_Grotesk'] border-2 rounded-lg p-[0.5em] w-full mt-[0.5em]"
          type="text"
          required
          placeholder={"e.g. 1234 5678 9123 0000"}
          {...register("cardNumber")}
        />
      </div>

      <div className="w-full mt-[1em]">
        <label className="font-['Space_Grotesk'] tracking-widest text-xs">
          EXP. DATE (MM/YY)
        </label>
        <div className="flex">
          <input
            className="font-['Space_Grotesk'] border-2 rounded-lg p-[0.5em] w-full mt-[0.5em]"
            type="text"
            required
            placeholder={"MM"}
            {...register("theMonth")}
          />
          <input
            className="font-['Space_Grotesk'] border-2 rounded-lg p-[0.5em] w-full ml-[5px] mt-[0.5em]"
            type="text"
            required
            placeholder={"YY"}
            {...register("theYear")}
          />
        </div>
        <div className="w-full mt-[1em]">
          <label className="font-['Space_Grotesk'] tracking-widest text-xs">
            CVC
          </label>
          <input
            className="font-['Space_Grotesk'] border-2 rounded-lg p-[0.5em] w-full mt-[0.5em]"
            type="text"
            required
            placeholder={"e.g. 123"}
            {...register("verCode")}
          />
        </div>
      </div>
      {/* <button
        type="submit"
        className="w-full bg-dark-violet rounded-lg mt-[1em] p-[0.5em]"
        onSubmit={() =>
          setValue("theName", "cardNumber", {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      >
        CONFIRM
      </button> */}
      <input
        type="submit"
        className="w-full bg-dark-violet text-[#fff] rounded-lg mt-[1em] p-[0.5em] cursor-pointer"
      />
    </div>
  );
}

export default Info;
