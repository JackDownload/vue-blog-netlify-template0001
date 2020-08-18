'use strict'
module.exports = {
  NODE_ENV: '"production"',
  COSMIC_BUCKET: `"${process.env.COSMIC_BUCKET || '403ce750-e0bf-11ea-a7da-416cf5f0e16c'}"`,
  COSMIC_READ_KEY: `"${process.env.COSMIC_READ_KEY || 'KUQwJBqttZxNKM4Y2iAZndrEqCTaH0g4f5Uj7gnV0Uqdwpe8bF'}"`,
  COSMIC_WRITE_KEY: `"${process.env.COSMIC_WRITE_KEY || 'JHWFF4J46U5jH6Aq2WX5xTFCB1BtKvX17yysqbW23PWTfIsrY3'}"`,
  BLOG_TITLE: `"${process.env.BLOG_TITLE || 'VueBlog'}"`,
}
