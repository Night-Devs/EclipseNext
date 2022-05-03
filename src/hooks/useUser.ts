import OAuth2 from '../controllers/Discord.controller'
import { useEffect, useState } from 'react'

export interface UseUserResponse {
    [key: string]: any,
    isLoading: boolean,
    isError: boolean,
    reason?: string
}

export default function useUser(token?: string): UseUserResponse {
    const [response, setResponse] = useState<UseUserResponse>({
        isLoading: true,
        isError: false,
        reason: undefined,
    })

    useEffect(() => {
        if (!token)
            return setResponse({
                reason: 'Token isn\'t provided',
                isLoading: false,
                isError: false,
            })

        function handleError (reason: string) {
            setResponse({
                reason: reason,
                isLoading: false,
                isError: true,
            })
        }
        try {
            OAuth2.getUser(token)
                .then(response => {
                    setResponse({...response, isError: false, isLoading: false})
                }).catch(handleError)
        } catch (e: any) {
            setResponse({
                reason: e.message,
                isLoading: false,
                isError: true,
            })
        }
    }, [token])

    return response
}
