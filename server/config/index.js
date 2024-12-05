export const config = {
  port: process.env.PORT || 3000,
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  }
};