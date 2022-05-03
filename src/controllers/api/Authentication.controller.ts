import TokenDTO from '../../dtos/TokenDTO'
import axios from 'axios'

export default class Authentication {
  private static requestToken(
    data: URLSearchParams,
  ): Promise<TokenDTO> {
    return new Promise((resolve) => {
      axios
        .post(`https://discord.com/api/v10/oauth2/token`, data, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then(({ data }) => {
          const { access_token, token_type, refresh_token, expires_in, scope } =
            data
          resolve({
            accessToken: access_token,
            tokenType: token_type,
            refreshToken: refresh_token,
            expiresIn: expires_in,
            scope,
          })
        })
        .catch(resolve)
    })
  }

  public static getToken(code: string) {
    const params = new URLSearchParams()
    params.append('client_id', process.env.CLIENT_ID!)
    params.append('client_secret', process.env.CLIENT_SECRET!)
    params.append('grant_type', 'authorization_code')
    params.append('redirect_uri', process.env.REDIRECT_URL!)
    params.append('code', code)
    
    return this.requestToken(params)
  }

  public static async refreshToken(token: string) {
    const params = new URLSearchParams()
    params.append('client_id', process.env.CLIENT_ID!)
    params.append('client_secret', process.env.CLIENT_SECRET!)
    params.append('grant_type', 'refresh_token')
    params.append('redirect_uri', process.env.REDIRECT_URL!)
    params.append('refresh_token', token)

    return this.requestToken(params)
  }

  // public static async moblieCallback(
  //   request: Request,
  //   response: Response,
  //   next: NextFunction,
  // ) {
  //   const { code } = request.query as Static<typeof getTokenSchema>
  //   const tokenResponse = await Authentication.requestToken(
  //     new URLSearchParams({
  //       client_id: process.env.CLIENT_ID,
  //       client_secret: process.env.CLIENT_SECRET,
  //       grant_type: 'authorization_code',
  //       redirect_uri: `${request.protocol}://${request.get('host')}${
  //         request.originalUrl.split('?')[0]
  //       }`,
  //       code,
  //     }),
  //   )
  //   if (tokenResponse instanceof Error) return next(createHttpError(400))
  //   response.redirect(`com.eclipse://auth/?token=${tokenResponse.accessToken}`)
  // }
}
