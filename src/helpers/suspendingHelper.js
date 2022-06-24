
export const wrapPromise = promise => {
    let status = "pending";
    let result;
    let suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        e => {
            status = "error";
            result = e;
        }
    )
    return {
        read() {
            console.log("suspender status", status);
            switch (status) {
                case 'pending':
                    console.log(suspender);
                    throw suspender; break;
                case 'success':
                    return result;
                case 'error':
                    throw result;
            }
        }
    }
}

