import Calc from "./comps/Calc";
import Result from "./comps/Result";
import { useForm, FormProvider } from "react-hook-form";

type FormInputs = {
  theBill: string;
  customTip: string;
  numOfPeople: string;
};

function App() {
  const methods = useForm<FormInputs>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <div className="App">
        <div className="header--el">
          <h1>
            SPLI
            <br />
            TTER
          </h1>
        </div>
        <form onChange={methods.handleSubmit(onSubmit)}>
          <div className="tip-container--el">
            <Calc />
            <Result />
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default App;
