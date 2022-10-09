import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
const CardForm = ({ onSubmit, onInputChange }) => {
  type FormValues = {
    name: string;
    cardNumber: string;
    month: string;
    year: string;
    cvc: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    },
  });

  useEffect(() => {
    const subscription = watch((data) => {
      onInputChange(data);
    });
    return () => {
      subscription.unsubscribe;
    };
  }, [watch]);

  return (
    <div className="mt-16 sm:mt-60 w-80 mx-auto">
      <form onSubmit={handleSubmit(() => onSubmit())}>
        <div className="my-5">
          <h1>
            <label htmlFor="name">CARDHOLDER NAME</label>
          </h1>

          <div className="flex mt-2 w-full items-center justify-center">
            <div className="cursor-pointer w-full rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to focus-within:p-[1px]">
              <input
                id="name"
                placeholder="e.g. Jane Appleseed"
                className={
                  "w-full  border rounded-lg focus:outline-0 p-2 cursor-pointer " +
                  (errors.name
                    ? "border-red focus:border-light-grayish-violet"
                    : "border-light-grayish-violet")
                }
                {...register("name", { required: true })}
              />
            </div>
          </div>
          {errors.name && <div className="text-red">Can't be blank</div>}
        </div>
        <div className="my-5">
          <label htmlFor="number">CARD NUMBER</label>
          <div className="flex mt-2 w-full items-center justify-center">
            <div className="cursor-pointer w-full rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to focus-within:p-[1px]">
              <input
                id="number"
                placeholder="e.g. 1234 5678 9123 0000"
                className={
                  "w-full  border rounded-lg focus:outline-0 p-2 cursor-pointer " +
                  (errors.cardNumber
                    ? "border-red focus:border-light-grayish-violet"
                    : "border-light-grayish-violet")
                }
                {...register("cardNumber", {
                  required: true,
                })}
              />
            </div>
          </div>
          {errors.cardNumber && errors.cardNumber.type === "required" && (
            <div className="text-red">Can't be blank</div>
          )}
          {errors.cardNumber && errors.cardNumber.type === "pattern" && (
            <div className="text-red">Wrong Format</div>
          )}
        </div>
        <div className="my-5">
          <div className="flex space-x-3">
            <div className="basis-2/3">
              <label htmlFor="date">Exp. Date (MM/YY)</label>

              <div className="flex space-x-3">
                <div className="flex mt-2 w-full items-center justify-center">
                  <div className="cursor-pointer w-full rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to focus-within:p-[1px]">
                    <input
                      id="date"
                      placeholder="MM"
                      className={
                        "w-full  border rounded-lg focus:outline-0 p-2 cursor-pointer " +
                        (errors.month
                          ? "border-red focus:border-light-grayish-violet"
                          : "border-light-grayish-violet")
                      }
                      {...register("month", {
                        required: true,
                        min: 0,
                        max: 12,
                      })}
                    />
                  </div>
                </div>
                <div className=" flex-auto flex mt-2 w-full items-center justify-center">
                  <div className="cursor-pointer w-full rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to focus-within:p-[1px]">
                    <input
                      placeholder="YY"
                      className={
                        "w-full  border rounded-lg focus:outline-0 p-2 cursor-pointer " +
                        (errors.year
                          ? "border-red focus:border-light-grayish-violet"
                          : "border-light-grayish-violet")
                      }
                      {...register("year", {
                        required: true,
                        min: 22,
                        max: 99,
                      })}
                    />
                  </div>
                </div>
              </div>
              {errors.month && errors.month.type === "required" && (
                <div className="text-red">Can't be blank</div>
              )}
              {errors.month && errors.month.type === "min" && (
                <div className="text-red">Min Month is 00</div>
              )}
              {errors.month && errors.month.type === "max" && (
                <div className="text-red">Max Month is 12</div>
              )}
              {!errors.month &&
                errors.year &&
                errors.year.type === "required" && (
                  <div className="text-red">Can't be blank</div>
                )}
              {errors.year && errors.year.type === "min" && (
                <div className="text-red">Minimum Year is 22</div>
              )}
              {errors.year && errors.year.type === "max" && (
                <div className="text-red">Max Year is 99</div>
              )}
            </div>
            <div>
              <label htmlFor="cvc">CVC</label>
              <div className="flex mt-2 w-full items-center justify-center">
                <div className="cursor-pointer w-full rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to focus-within:p-[1px]">
                  <input
                    id="cvc"
                    placeholder="e.g. 123"
                    className={
                      "w-full  border rounded-lg focus:outline-0 p-2 cursor-pointer " +
                      (errors.name
                        ? "border-red focus:border-light-grayish-violet"
                        : "border-light-grayish-violet")
                    }
                    {...register("cvc", { required: true })}
                  />
                </div>
              </div>
              {errors.cvc && <div className="text-red">Can't be blank</div>}
            </div>
          </div>
        </div>
        <button className="bg-very-dark-violet w-full text-white py-3 rounded-lg">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CardForm;
