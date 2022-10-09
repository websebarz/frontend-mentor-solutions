import { useForm } from "react-hook-form";

const Form = () => {
  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isCompleted: boolean;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isCompleted: false,
    },
  });
  return (
    <>
      <div className="w-[90%] mr-auto ml-auto bg-blue p-4 rounded-lg text-center shadow-lg">
        <p className="text-white">Try it free 7 days then $20/mo. thereafter</p>
      </div>
      <div className="w-[90%] p-4 bg-white mr-auto ml-auto rounded-md mt-4 shadow-lg">
        <form>
          <div className="flex flex-col">
            <h1>
              <label htmlFor="firstName">First Name</label>
            </h1>
            <div className="flex mt-2 w-full items-center justify-center">
              <div className="w-full">
                <input
                  id="firstName"
                  placeholder="e.g. Alice"
                  className="w-full   border rounded-lg focus:outline-0 p-2 cursor-pointer"
                  {...register("firstName", { required: true })}
                />
                {}
              </div>
            </div>
            {}
          </div>
          <div className="flex flex-col mt-4">
            <h1>
              <label htmlFor="lastName">Last Name</label>
            </h1>
            <div className="flex mt-2 w-full items-center justify-center">
              <div className="w-full">
                <input
                  id="lastName"
                  placeholder="e.g. Wonderland"
                  className="w-full   border rounded-lg focus:outline-0 p-2 cursor-pointer"
                  {...register("lastName", { required: true })}
                />
                {}
              </div>
            </div>
            {}
          </div>
          <div className="flex flex-col mt-4">
            <h1>
              <label htmlFor="email">E-mail</label>
            </h1>
            <div className="flex mt-2 w-full items-center justify-center">
              <div className="w-full">
                <input
                  id="email"
                  placeholder="e.g. alice@wonderland.io"
                  className="w-full   border rounded-lg focus:outline-0 p-2 cursor-pointer"
                  {...register("email", { required: true })}
                />
                {}
              </div>
            </div>
            {}
          </div>
          <div className="flex flex-col mt-4">
            <h1>
              <label htmlFor="password">Password</label>
            </h1>
            <div className="flex mt-2 w-full items-center justify-center">
              <div className="w-full">
                <input
                  id="password"
                  className="w-full   border rounded-lg focus:outline-0 p-2 cursor-pointer"
                  {...register("password", { required: true })}
                />
                {}
              </div>
            </div>
            {}
          </div>
          <button className="w-full bg-green rounded-lg mt-4 p-4 text-white shadow-lg">
            CLAIM YOUR FREE TRIAL
          </button>
          <div className="text-center mt-4 w-5/6 mr-auto ml-auto">
            <p className="text-[11px]">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-red font-bold">Terms and Services</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
