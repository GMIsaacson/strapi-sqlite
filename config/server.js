module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS')
  },
});

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['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', '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']
  },
});
