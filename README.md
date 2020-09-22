
<p align="center">
  <img src="https://raw.githubusercontent.com/ccims/overview-and-documentation/c97db39633418d2a0d4e5690a810d62fe5ff5247/app_logos/logo_final_6.25p.svg">
</p>

# logging-message-format

A TypeScript Package that provides the types for a LogMessage. It contains Meta Data and Custom Data. The Custom Data has its own Types.


## Installation

`npm i https://github.com/ccims/logging-message-format.git`

## Usage

### Reporting Errors

To report an Error, for axample when a request fails because the target service is not available, you can use the `reportError` function, exported by this package. Here is an example:

    reportError({
        correlationId: null,
        log: {
            detector: "Acount Service",
            source: "Database Service",
            time: Date.now(),
            type: LogType.ERROR,
            data: {
                expected: "not defined",
                result: error
            }
        }
    });

In this case, the Account Services tries to make a request to the Database Service, which is unavailable. The Account Serives reports an error, where `null` is passed as the correlationId, meaning a new correlationId must be created. Furthermore a `LogMessageFormat` is attached to the `ErrorFormat` to provide information about this error.

### Handling transfer request

before reporting an Error, you should check if the occoured error already has a correlationId. This means the error was already reported, which can happen with transfer request. In this case, the recieved error has the type `ErrorFormat`, you can then just use this `ErrorFormat` when reporting the error. Here is an example:

    const corrId = error.error.correlationId
    if (isNullOrUndefined(corrId)) {
        // A new Error occoured
        reportError({
            correlationId: null,
            log: {
                detector: "Acount Service",
                source: source,
                time: Date.now(),
                type: LogType.ERROR,
                data: {
                    expected: "not defined",  // what exactly should be expected value is not defined
                    result: error
                }
            }
        });
    } else {
        // This Error is the result of a transfering request and was already reported
        reportError(error.error);
    }
    
## LogMessageFormat
`{ time: number; 
  source: string; 
  detector: string; 
  message?: string; 
  type: LogType; 
  data: CpuUtilizationLogData | TimeoutLogData | CbOpenLogData | ErrorLogData;}`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
