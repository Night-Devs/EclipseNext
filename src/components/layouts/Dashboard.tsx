import { useRouter } from 'next/router'
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { getGuild } from '../../services/auth'
import { store } from '../../store'
import { Guild } from '../../types/Discord'
import Footer from '../general/Footer'
import Header from '../general/Header'
import SecondaryHeader from '../layout/dashboard/items/SecondaryHeader'

export default function Dashboard({children, onGuild}: {children: ReactNode, onGuild?: Dispatch<SetStateAction<Guild | undefined>>}) {
    const [guild, setGuild] = useState<Guild>()
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady)
            return
        
        getGuild(store.getState().auth.token, router.query.id as string)
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
