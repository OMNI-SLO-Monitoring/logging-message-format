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
export interface CpuUtilizationLogData {
    cpuUtilization: number;
}
export interface TimeoutLogData {
    timeoutDuration: number;
}
export interface CbOpenLogData {
    openTime: number;
    failedResponses: number;
}
export interface ErrorLogData {
    expected: any;
    result: any;
}
