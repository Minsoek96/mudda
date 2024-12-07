import Funnel, { Step } from "@/components/Funnel";
import NameInputStep from "./Steps/NameInputStep";
import useNameInputStep from "./Steps/NameInputStep/useNameInputStep";

const CreateCapsulePage = () => {
  const {
    inputName,
    setInputName,
    stepProps: nameInputStepProps,
  } = useNameInputStep();

  const steps: Array<Step> = [
    {
      children: <div>step 1</div>,
      BottomButton: {
        onClick: () => true,
      },
      errorMessage: "잘못된 입력입니다.",
    },
    {
      children: <NameInputStep name={inputName} setName={setInputName} />,
      ...nameInputStepProps,
    },
    {
      children: <div>step 3</div>,
      BottomButton: {
        onClick: () => true,
      },
      errorMessage: "잘못된 입력입니다.",
    },
  ];

  return (
    <>
      <Funnel
        steps={steps}
        firstBackCallback={() => console.log("go back")}
        lastNextCallback={() => console.log("go next")}
      />
    </>
  );
};

export default CreateCapsulePage;
