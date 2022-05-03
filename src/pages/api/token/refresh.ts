import { NextApiRequest, NextApiResponse } from 'next'
import Authentication from '../../../controllers/api/Authentication.controller'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = JSON.parse(req.body?.toString())

  if (!token)
    return res.status(400).send({ message: '\'token\' field isn\'t provided' })
  
  return await Authentication.refreshToken(token)
}
