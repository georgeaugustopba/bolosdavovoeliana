// Path: ./config/env/production/server.js`
export default ({ env }) => ({
    proxy: true,
    url: env('https://git.heroku.com/bolosdavovo.git'), // Sets the public URL of the application.
    app: {
        keys: env.array('APP_KEYS')
    },
});