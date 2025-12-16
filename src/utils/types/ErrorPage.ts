
export interface ErrorProps {
  statusCode?: number;
  message?: string;
  error?: {
    code?: string | number;
    message?: string;
  };
}