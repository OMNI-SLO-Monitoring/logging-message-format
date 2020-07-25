import ErrorFormat from "./error-format";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

/**
 * @param error that sould be reported to the error monitor
 * 
 * If error.correlationId is null, a new correlationId is created.
 * If error.correlationId is not null, the error will be reported with this correlationId
 */
export const reportError = (error: ErrorFormat): ErrorFormat => {
    if (error.correlationId == null) {
        error.correlationId = uuidv4()
    }

    console.log("reporting error to monitor", error);
    axios.post("http://localhost:3400", error)
        .then(res => console.log("Error successfuly reported"))
        .catch(err => console.log("Error when reporting error"));

    return error;
}