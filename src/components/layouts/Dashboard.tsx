import SecondaryHeader from '../layout/dashboard/items/SecondaryHeader/SecondaryHeader'
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import OAuth2 from '../../controllers/Discord.controller'
import Footer from '../general/Footer/Footer'
import Header from '../general/Header/Header'
import { Guild } from '../../types/Discord'
import { useRouter } from 'next/router'
import { store } from '../../store'

export default function Dashboard({children, onGuild}: {children: ReactNode, onGuild?: Dispatch<SetStateAction<Guild | undefined>>}) {
    const [guild, setGuild] = useState<Guild>()
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady)
            return
        
        OAuth2.getGuild(store.getState().token.accessToken, router.query.id as string)
            .then(guild => (setGuild(guild), onGuild && onGuild(guild)))
    }, [router.isReady])

    return (
        <div>
            <Header style={{position: 'absolute', zIndex: 1}}/>
                {guild && <>
                    <SecondaryHeader guild={guild} />
                    <div className='p-top-20' style={{background: '#2B2A2A'}}>
                        {children}
                    </div>
                </>}
            <Footer style={{paddingTop: '21vw'}}/>
        </div>
    )
}
