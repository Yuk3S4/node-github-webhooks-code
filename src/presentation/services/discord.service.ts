import { envs } from '../../config'

export class DiscordService {

    private readonly discordWebHookUrl = envs.DISCORD_WEBHOOK_URL

    constructor() {}

    async notify( message: string ) {

        const body = {
            content: message,   
            embeds: [
                {
                    images: { url: 'https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/64e79ca5aff2fb7295bfddf9_github-que-es.jpg' }
                }
            ]         
        }

        const response = await fetch( this.discordWebHookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( body ),
        })

        if ( !response.ok ) {
            console.log('Error sending message to discord')
            return false            
        }

        return true
    }

}