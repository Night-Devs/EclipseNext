// import axios, { AxiosResponse } from 'axios'
// import { useEffect, useState } from 'react'

export default async function useUser(token: string) {
  // const [response, setResponse] = useState<Promise<AxiosResponse>>()

  // useEffect(() => {
  //   setResponse(axios.get('https://discord.com/api/v10/users/@me', {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   }))
  // })

  // // Мы же ведь все знаем как работает стек-вызовов и что если мы попытаемся await'нуть response, до того как выолнится useEffect будет пиздец?
  // while (!response)
  //   continue
  
  // const awaitedResponse = await response

  // // Я думаю этого достаточно, чтобы понять насколько всё плохо/хорошо.
  // if (!awaitedResponse.data.id ||
  //     !awaitedResponse.data.username)
  //   return new Error(`Failed to get user identify information with that token: ${token}\n` +
  //                    `Status Code: ${awaitedResponse.status}\n` +
  //                    `Status Text: ${awaitedResponse.statusText}\n` +
  //                    `Server Response: ${awaitedResponse.data}`)
  
  // return awaitedResponse.data
}
