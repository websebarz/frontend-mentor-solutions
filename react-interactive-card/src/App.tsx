import Card from "./Card";
import { useForm, FormProvider } from "react-hook-form";

type FormInputs = {
  theName: string;
  cardNumber: string;
  theDate: string;
  verCode: string;
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
      <div className="h-screen">
        <Card />
        <form onChange={methods.handleSubmit(onSubmit)}></form>
      </div>
    </FormProvider>
  );
}

export default App;
