import app from '../../app'
import request from 'supertest'

describe('Post', () => {
  it('returns status code 200 if rounds and switch are passed', async () => {
    const res = await request(app).post('/').send({ rounds: 10, switch: true })
    expect(res.statusCode).toEqual(200)
  })

  it('returns missing fields and status code 400 if rounds or switch are not passed or formatted correctly', async () => {
    const res = await request(app).post('/').send({})
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({
      status: 'error',
      message: 'Missing required fields',
    })
  })
})
