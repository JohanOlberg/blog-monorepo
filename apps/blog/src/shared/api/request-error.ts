import { isAxiosError } from "axios";

export function isNotFoundError(error: unknown): boolean {
  return isAxiosError(error) && error.response?.status === 404;
}

export function retryPostRequest(failureCount: number, error: unknown): boolean {
  return !isNotFoundError(error) && failureCount < 2;
}
