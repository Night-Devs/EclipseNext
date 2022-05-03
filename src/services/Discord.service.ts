import axios from 'axios'
import TokenDTO from '../dtos/TokenDTO'

export default class OAuth2 {
    static async getToken(code: string): Promise<TokenDTO> {
        const response = await axios.post(`http://${process.env.apiUrl}/auth/token`, { code })
    
        if (!response.data.accessToken                ||
            !response.data.scope.includes('identify') ||
            !response.data.scope.includes('guilds'))
        throw new Error(`Failed to get token with that code: "${code}"\n` +
                            `Status Code: ${response.status};\n` +
                            `Status Text: ${response.statusText};\n` +
                            `Server Response: ${JSON.stringify(response, null, 4)}`)
        
        return response.data
    }

    static async getUser(token: string) {
        try {
            const response = await axios.get('https://discord.com/api/v10/users/@me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            if (!response.data.id)
                return new Error(`Failed to get user info with that token: "${token}"\n` +
                                `Status Code: ${response.status};\n` +
                                `Status Text: ${response.statusText};\n` +
                                `Server Response: ${JSON.stringify(response, null, 4)}`)
            
            return response.data
        } catch(e) {
            return new Error(`Failed to get user info with that token: "${token}"\nServer returned an error.`)
        }
    }

    static async getGuilds(token: string): Promise<any[] | Error> {
        try {
            const response = await axios.get('https://discord.com/api/v10/users/@me/guilds', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            if (!response.data)
                return new Error(`Failed to get user guilds with that token: "${token}"\n` +
                                `Status Code: ${response.status};\n` +
                                `Status Text: ${response.statusText};\n` +
                                `Server Response: ${JSON.stringify(response, null, 4)}`)
            
            return response.data
        } catch(e) {
            return new Error(`Failed to get user guilds info with that token: "${token}"\nServer returned an error.`)
        }
    }

    static async getGuild(token: string, id: string): Promise<any | Error> {
        const guilds = await OAuth2.getGuilds(token)
        return guilds instanceof Error ? guilds : guilds.find(guild => guild.id == id)
    }    
}
