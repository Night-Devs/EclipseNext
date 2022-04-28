import { useEffect, useState } from 'react'
import { getToken } from '../services/auth'

interface UseTokenResponse {
    accessToken?: string,
    refreshToken?: string,
    expiresIn?: number,
    scope?: string,
    isLoading: boolean,
    isError: boolean,
    reason?: string,
}

export default function useToken(code: string) {
    const [response, setResponse] = useState<UseTokenResponse>({
        accessToken: undefined,
        refreshToken: undefined,
        expiresIn: undefined,
        scope: undefined,
        isLoading: true,
        isError: false,
        reason: undefined,
    })

    useEffect(() => {
        getToken(code)
            .then(response => setResponse({...response, isLoading: false, isError: false}))
            .catch(reason => setResponse({
                reason: reason,
                isLoading: false,
                isError: true,
            }))
    }, [])

    return response
}
