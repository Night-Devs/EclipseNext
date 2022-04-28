import AutoGreetings from '../../../components/layout/dashboard/pages/AutoGreetings'
import Dashboard from '../../../components/layouts/Dashboard'
import { Guild } from '../../../types/Discord'
import dynamic from 'next/dynamic'

function Guild () {
    return (
        <Dashboard>
            <AutoGreetings />
        </Dashboard>
    )
}

export default dynamic(Promise.resolve(Guild), {ssr: false})
