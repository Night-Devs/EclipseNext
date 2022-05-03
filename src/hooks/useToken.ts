import OAuth2 from '../controllers/Discord.controller'
import { useEffect, useState } from 'react'

export interface UseTokenResponse {
    accessToken?: string,
    refreshToken?: string,
    expiresIn?: number,
    scope?: string,
    isLoading: boolean,
    isError: boolean,
    reason?: string,
    tokenType?: string,
}

/**
 * @param code When 'auto' provided will take code from url param 'code'
 */
export default function useToken(code: 'auto' | string): UseTokenResponse {
    const [response, setResponse] = useState<UseTokenResponse>({
        accessToken: undefined,
        refreshToken: undefined,
        expiresIn: undefined,
        scope: undefined,
        isLoading: true,
        isError: false,
        reason: undefined,
        tokenType: undefined,
    })

    useEffect(() => {
        const fetchedCode = code == 'auto'
            ? new URL(window.location.href).searchParams.get('code')
            : code
        
        if (!fetchedCode)
            return setResponse({isLoading: false, isError: true})
        
        function handleError (reason: string) {
            setResponse({
                reason: reason,
                isLoading: false,
                isError: true,
            })
        }
        try {
            OAuth2.getToken(fetchedCode)
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
    }, [])

    return response
}
