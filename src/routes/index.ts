import { Response, Request, Router } from 'express'
import runMontyHallSim from '../controllers/index'

const route = Router()

interface simParamsProps {
  rounds: number
  switch: boolean
}

route.post('/', (req: Request, res: Response) => {
  const simParams: simParamsProps = req.body
  if (!simParams.rounds || !simParams.switch) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required fields',
    })
  }
  try {
    const wins = runMontyHallSim(simParams.rounds, simParams.switch)
    res.status(200).json(wins)
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    })
  }
})

export default route
