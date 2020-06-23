import { LogType } from "./log-type";

/*
  LogMessageFormat provides the types for a LogMessage.
  It contains Meta Data wich every Log should have and Custom Data.
  Which Custom Data is used, is defined by the used type (LogType).
*/
export interface LogMessageFormat {
  // Meta Data
  
  // date and time when log was created
  time: number;

  // The service where the error occured (Not yet specified what should be reported: url,name,...)
  source: string;

  // The service where the error was detected (Not yet specified what should be reported: url,name,...)
  detector: string;

  // any additional message
  message: string;

  // type defines the used custom data
  type: LogType;

  // Custom Data
  data: CpuUtilizationLogData | TimeoutLogData | CbOpenLogData | ErrorLogData;
}

/*
  CpuUtilizationLogData is the custom data for Cpu Utilizaton Logs
*/
export interface CpuUtilizationLogData {
  // CPU Utilization value
  cpuUtilization: number;
}

/*
  TimeoutLogData is the custom data for timeout logs
*/
export interface TimeoutLogData {
  // Timeout duration of response
  timeoutDuration: number
}

/*
  CbOpenLogData is the custom data for circuit breaker open logs
*/
export interface CbOpenLogData {
  // Circuit Breaker Open Time
  openTime: number;

  // Number of failed responses until circuit breaker open
  failedResponses: number;
}

/*
  ErrorLogData is the custom data for error response logs
*/
export interface ErrorLogData {
  // Expected data
  expected: any;

  // Data that was returned
  result: any;
}