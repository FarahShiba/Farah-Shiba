module.exports = {
  //[A]. PORT ENVS
  port: process.env.PORT,

  //[B]. DATABASE ENVS
  db: {
    serviceAccountKey: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    storageBucket: process.env.STORAGE_BUCKET_URL,
  },

  // [C] AUTH ENVs
  authentication: {
    //Application secret for creating a secure web token
    jwtSecret: process.env.JWT_SECRET,
  },

  // [D] Approved CORS root URLs
  corsAllowedOptions: [
    process.env.CORS_WHITELIST_1,
    process.env.CORS_WHITELIST_2,
  ],
};
