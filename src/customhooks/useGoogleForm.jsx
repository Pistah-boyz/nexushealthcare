import { resolveBreakpointValues } from "@mui/system/breakpoints";
import { useState } from "react";
import { post } from "../api/api";

function useGoogleForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (formData, url) => {
    setSubmitting(true);
    try {
      // const response = await fetch(url, {
      //   method: "POST",
      //   // headers: {
      //   //   "Content-Type": "application/x-www-form-urlencoded",
      //   // },
      //   // body: new URLSearchParams(formData).toString(),
      //   body: formData,
      // });
      const response = post(url, formData);
      setSuccess(true);
    } catch (error) {
      setError(error);
    }
    setSubmitting(false);
  };

  return [submitForm, submitting, success, error];
}

export default useGoogleForm;
