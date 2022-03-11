// import axios, { AxiosResponse } from 'axios'
// import { useEffect, useState } from 'react'

export default function useCode(code: string) {
  // const [response, setResponse] = useState<Promise<AxiosResponse>>()

  // let awaitedResponse: AxiosResponse | undefined

  // useEffect(() => {
  //   setResponse(axios.post('http://localhost:4000/auth/token', { code }).then(response => awaitedResponse = response))
  // })

  // // Мы же ведь все знаем как работает стек-вызовов и что если мы попытаемся await'нуть response, до того как выолнится useEffect будет пиздец?
  // while (!awaitedResponse)
  //   continue
  
  // if (!awaitedResponse.data.accessToken                ||
  //     !awaitedResponse.data.refreshToken               ||
  //     !awaitedResponse.data.expiresIn                  ||
  //     !awaitedResponse.data.scope.includes('identify') ||
  //     !awaitedResponse.data.scope.includes('guilds'))
  // return new Error(`Failed to get token with that code: "${code}"\n` +
  //                  `Status Code: ${awaitedResponse.status};\n` +
  //                  `Status Text: ${awaitedResponse.statusText};\n` +
  //                  `Server Response: ${awaitedResponse}`)
  
  // return awaitedResponse.data
}