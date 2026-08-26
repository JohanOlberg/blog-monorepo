
import axios from "axios";
import { apiMessageMap } from "../model/apiMessageMap";


type ErrorStatus = "api" | "network" | "unknown";

type NormalizedApiError = {
  status: ErrorStatus;
  message: string;
  statusCode?: number;
};

type ApiErrorResponse = {
  message?: string;
  issues?: {
    path?: string;
    message: string;
  }[];
};

function normalizeApiError(error: unknown): NormalizedApiError {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const data = error.response?.data;

    if (!error.response) {
      return {
        status: "network",
        message: "Network Error",
      };
    }

    return {
      status: "api",
      statusCode: error.response.status,
      message:
        data?.issues?.[0]?.message ??
        data?.message ??
        "Something went wrong.",
    };
  }

  if (error instanceof Error) {
    return {
      status: "unknown",
      message: error.message,
    };
  }

  return {
    status: "unknown",
    message: "Unknown error",
  };
}

const mapErrorStatus: Record<ErrorStatus, (message: string) => string> = {
  api: (message) => apiMessageMap[message] ?? message,

  network: () =>
    "Could not connect to the server. Please check your connection and try again.",

  unknown: () =>
    "Something went wrong. Please try again.",
};

export function getApiErrorMessage(error: unknown): string {
  const normalizedError = normalizeApiError(error);

  return mapErrorStatus[normalizedError.status](normalizedError.message);
}