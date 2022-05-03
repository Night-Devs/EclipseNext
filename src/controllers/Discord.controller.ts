import Discord from '../services/Discord.service'

export default class OAuth2 {
    static async getToken(code: string) {
        return Discord.getToken(code)
    }

    static async getUser(token: string) {
        return Discord.getUser(token)
    }

    static async getGuilds(token: string) {
        return Discord.getGuilds(token)
    }

    static async getGuild(token: string, id: string) {
        return Discord.getGuild(token, id)
    }
}
