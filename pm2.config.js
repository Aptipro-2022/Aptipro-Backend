module.exports = {
    apps: [
      {
        name: 'my-app',
        script: 'server.js',
        instances: 'max',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };