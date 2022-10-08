import Card from "./Card";
import Info from "./Info";
import { useForm, FormProvider } from "react-hook-form";

type FormInputs = {
  theName: string;
  cardNumber: string;
  theMonth: string;
  theYear: string;
  verCode: string;
};

function App() {
  const methods = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = (data: any, e: any) => {
    // e.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <div className="h-screen">
        <Card />
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Info />
        </form>
      </div>
    </FormProvider>
  );
}

export default App;
