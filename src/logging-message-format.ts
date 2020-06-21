import { LogType } from "./log-type";

export interface LogMessageFormat {
  // Meta Data
  type: LogType;
  time: number;
  source: string;
  target: string;

  // Custom Data
  data: CpuUtilizationLogData | TimeoutLogData | CbOpenLogData | ErrorLogData;
}

export interface CpuUtilizationLogData {
  cpuLoad: number;
}

export interface TimeoutLogData {

}

export interface CbOpenLogData {

}

export interface ErrorLogData {

}