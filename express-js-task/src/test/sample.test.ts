const request = require('supertest')
const app = require('../app')
const pool = require('../config/db')

describe('Users API', () => {
  beforeAll(async () => {
    await pool.query('DROP TABLE IF EXISTS users');
    await pool.query('CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL)');
  });

  beforeEach(async () => {
    await pool.query('TRUNCATE table users');
  });

  afterAll(async () => {
    await pool.end();
  })

  //POST
  it("creating new post when both name and email are provided", async () => {
    const res = await request(app).post("/api/users").send({
      name: "aliya",
      email: "aliya@gmail.com"
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('user created successfully');
  });

  it("creating new post when either of the data is not provided", async () => {
    const res = await request(app).post("/api/users").send({
      name: "Aliya",
    });
    expect(res.statusCode).toBe(400);
  });

  it("creating new post when no data is not provided", async () => {
    const res = await request(app).post("/api/users").send();
    expect(res.statusCode).toBe(500);
  });

  //GET ALL
  it('GET /users should return all users', async () => {
    const result = await pool.query("INSERT INTO users (name,email) VALUES ($1,$2)", ['Bob', 'Bob@gamil.com']);
    const res = await request(app).get('/api/users');
    
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBe(1);
    expect(res.body.data[0].name).toBe('Bob');
  });

  it('should fetch a single post', async () => {
    const result = await pool.query("INSERT INTO users (name,email) VALUES ($1,$2) returning *", ["fcdghas", "ahfshjas@gmail.com"]);
    const postId = 3;
    const res = await request(app).get(`/api/users/${postId}`);
    
    expect(res.statusCode).toEqual(200);
  });

   it('should update a post', async () => {
    await pool.query("INSERT INTO users (name,email) VALUES ($1,$2) returning *", ["aliyaa", "aliya@gmail.com"]);
    const res = await request(app)
      .put('/api/users/4')
      .send({
        name: 'aliya',
        email: 'aliya@gmail.com',
      });

    expect(res.statusCode).toEqual(200);
    // expect(res.body.data[0].name).toBe('aliya');
    
  });

    it('should delete a post', async () => {
    await pool.query("INSERT INTO users (name,email) VALUES ($1,$2) returning *", ["bina", "bina@gmail.com"]);
    const res = await request(app).delete('/api/users/5');
    expect(res.statusCode).toEqual(200);
  });

  it('should respond with status code 404 if resource is not found', async () => {
    const postId = 1;
    const res = await request(app).get(`/api/users/${postId}`);
    expect(res.statusCode).toEqual(404);
  });

 



})