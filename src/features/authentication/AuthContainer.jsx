import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPFrom from "./CheckOTPForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOTP, getOTP } from "../../services/authService";

function AuthContainer() {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09172638641");

  const { isPending: isSendingOtp, mutateAsync,data:otpResponse } = useMutation({
    mutationFn: getOTP,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
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
            onSubmit={sendOtpHandler}
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPFrom
            onResendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
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
