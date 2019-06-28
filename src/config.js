const config = {
    apiURL: 'http://localhost:8000',
    googleClientId: '1057180754139-75u480mgabmpgb813sv5i2999l5u7c98.apps.googleusercontent.com'
};

switch(process.env.REACT_APP_ENV) {
    case 'dev':
        config.apiURL = 'http://localhost:8010';
        break;
    case 'production':
        config.apiURL = 'http://localhost:8000';
        break;
    default:
}

export default config;
