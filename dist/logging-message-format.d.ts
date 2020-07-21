import { LogType } from "./log-type";
/**
  LogMessageFormat provides the types for a LogMessage.
  It contains Meta Data which every Log should have and Custom Data.
  Which Custom Data is used, is defined by the used type (LogType).
*/
export interface LogMessageFormat {
    time: number;
    source: string;
    detector: string;
    message?: string;
    type: LogType;
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
