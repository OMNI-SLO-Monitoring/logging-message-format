# logging-message-format

A TypeScript Package that provides the types for a LogMessage. It contains Meta Data and Custom Data. The Custom Data has its own Types.

## Installation

`npm i https://github.com/ccims/logging-message-format.git`

## LogMessageFormat
`
{
  time: number;
  source: string;
  detector: string;
  message?: string;
  type: LogType;
  data: CpuUtilizationLogData | TimeoutLogData | CbOpenLogData | ErrorLogData;
}
`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
