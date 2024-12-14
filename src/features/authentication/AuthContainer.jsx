import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPFrom from "./CheckOTPForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOTP, getOTP } from "../../services/authService";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";

function AuthContainer() {
  const navigate = useNavigate();
  const [step, setStep] = useState(2);

  const { handleSubmit, register, getValues } = useForm();

  const { user } = useUser();
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOTP,
  });

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const sendOtpHandler = async (data) => {
    try {

      const { message } = await mutateAsync(data);
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
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPFrom
            onResendOtp={sendOtpHandler}
            phoneNumber={getValues("phone") ?? "09172638641"}
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
