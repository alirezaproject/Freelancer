import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPFrom from "./CheckOTPForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOTP, getOTP } from "../../services/authService";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const [step, setStep] = useState(2);
  //const [phoneNumber, setPhoneNumber] = useState("09172638641");
  const { handleSubmit, register, getValues } = useForm();

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOTP,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync({ data });
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isPending={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPFrom
            onResendOtp={sendOtpHandler}
            phoneNumber={getValues("phone")}
            onBack={() => setStep(1)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
