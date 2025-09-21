import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { CustomErrorData } from '../interfaces/interfaces';


export function parseApiError(err: unknown): string {
  if (
    typeof err === 'object' &&
    err !== null &&
    'status' in err &&
    'data' in err
  ) {
    const e = err as FetchBaseQueryError;
    const data = e.data as CustomErrorData;

    if (typeof data === 'string') return data;

    if (Array.isArray(data?.message)) {
      return data.message.map((m) => m.message).join('; ');
    }

    if (typeof data?.message === 'string') {
      return data.message;
    }

    return `HTTP error ${String(e.status)}`;
  }

  if (err instanceof Error) return err.message;

  return 'Unknown error';
}