module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'adf73d91b8e05d7f40dd22646f8f6d22'),
  },
});
