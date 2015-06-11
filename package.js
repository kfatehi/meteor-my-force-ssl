Package.describe({
  name: 'keyvan:my-force-ssl',
  version: '0.0.1',
  summary: "Require this application to use HTTPS if env var FORCE_SSL is set",
  documentation: 'README.md',
  git: 'https://github.com/keyvanfatehi/meteor-my-force-ssl'
});


Package.onUse(function (api) {
  if (process.env.FORCE_SSL) {
    api.use('webapp', 'server');
    api.use('underscore');
    // make sure we come after livedata, so we load after the sockjs
    // server has been instantiated.
    api.use('ddp', 'server');

    api.addFiles('force_ssl_common.js', ['client', 'server']);
    api.addFiles('force_ssl_server.js', 'server');
  }

  // Another thing we could do is add a force_ssl_client.js file that
  // makes sure document.location.protocol is 'https'. If it detected
  // the code was loaded from a non-localhost non-https site, it would
  // stop the app from working and pop up an error box or something.
});

