import { useState } from "react";
import type { ApiError } from "../interfaces/interfaces";

export function useApiError() {
  const [errorMessage, setErrorMessage] = useState("");

  function extract(error: unknown) {
    let message =
      "Please make sure that all fields are filled in correctly or not empty. Also, the title field consists of at least 3 characters.";

    if (
      typeof error === "object" &&
      error !== null &&
      "data" in error
    ) {
      const data = (error as ApiError).data;

      if (typeof data === "string") {
        message = data;
      } else if (data && typeof data.message === "string") {
        message = data.message;
      }
    } else if (
      typeof error === "object" &&
      error !== null &&
      "error" in error &&
      typeof (error as ApiError).error === "string"
    ) {
      message = (error as ApiError).error!;
    }

    setErrorMessage(message);
  }

  return { errorMessage, setErrorMessage, extract };
}