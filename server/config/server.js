module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1327),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7ad0a053d6e7674c988471e51bf61736'),
    },
  },
});
