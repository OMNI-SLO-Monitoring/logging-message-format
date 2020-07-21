# logging-message-format

A TypeScript Package that provides the types for a LogMessage. It contains Meta Data and Custom Data. The Custom Data has its own Types.

## Installation

`npm i https://github.com/ccims/logging-message-format.git`

## LogMessageFormat
`
{ <br/>
  time: number; <br/>
  source: string; <br/>
  detector: string; <br/>
  message?: string; <br/>
  type: LogType; <br/>
  data: CpuUtilizationLogData | TimeoutLogData | CbOpenLogData | ErrorLogData; <br/>
}
`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
