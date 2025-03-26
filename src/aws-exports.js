const awsconfig = {
    Auth: {
        Cognito: {
            identityPoolID: identityPoolId,
            region: region,
            userPoolId: userPoolId,
            userPoolWebClientId: userPoolWebClientId
        }
    }
};
export default awsconfig;
