import { LogType } from "./log-type";
/**
  LogMessageFormat provides the types for a LogMessage.
  It contains Meta Data which every Log should have and Custom Data.
  Which Custom Data is used, is defined by the used type (LogType).
*/
export interface LogMessageFormat {
    /** time : milliseconds elapsed since the UNIX epoch. Type JavaScript Number, 64 Bit precision. */
    time: number;
    /** The url of the service where the error occurred */
    sourceUrl: string;
    /** The url of the service where the error was detected */
    detectorUrl: string;
    /** optional: any additional message */
    message?: string;
    /** type defines the used custom data */
    type: LogType;
    /** Custom Data */
    data: CpuUtilizationLogData | TimeoutLogData | CbOpenLogData | ErrorLogData;
}
/**
  CpuUtilizationLogData is the custom data for Cpu Utilization Logs
*/
export interface CpuUtilizationLogData {
    /** CPU Utilization value */
    cpuUtilization: number;
}
/**
  TimeoutLogData is the custom data for timeout logs
*/
export interface TimeoutLogData {
    /** Timeout duration of response */
    timeoutDuration: number;
}
/**
  CbOpenLogData is the custom data for circuit breaker open logs
*/
export interface CbOpenLogData {
    /** Circuit Breaker Open Time */
    openTime: number;
    /** Number of failed responses until circuit breaker open */
    failedResponses: number;
}
/** ErrorLogData is the custom data for error response logs */
export interface ErrorLogData {
    /** Expected data */
    expected: any;
    /** Data that was returned */
    result: any;
}
