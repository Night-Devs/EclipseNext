import { NextApiRequest, NextApiResponse } from 'next'
import Authentication from '../../../controllers/api/Authentication.controller'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = JSON.parse(req.body?.toString())

  if (!code)
    return res.status(400).send({ message: '\'code\' field isn\'t provided' })
  
  return await Authentication.getToken(code)
}
