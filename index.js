exports.handler = async (event) => {
    console.log("Request received:", JSON.stringify(event, null, 2));

    // TODO: Implement your functionality here

    return {
        statusCode: 200,
        body: JSON.stringify('Hello, World!'),
    };
};
