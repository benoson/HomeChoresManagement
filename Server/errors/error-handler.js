const errorHandler = (error, request, response, next) => {


    // If No Authorization Token Was Found By The Login Filter
    if (error.status === 401){
        response.status(401).json({ error: 'Your are not authorized to do that' });
        console.log(error.inner.message);
        return;
    }

    // If the error received is defined, and we want to send it to the client
    else if (error.errorType !== undefined && error.errorType.isShowStackTrace) {
        console.log(error.errorType.message);
        response.status(error.errorType.httpCode).json({ error: error.errorType.message });
        return;
    }

    console.log(error);

    // Else, send the user a general error
    response.status(700).json({ error: 'A General Error Has Occurred' });
}


module.exports = errorHandler;