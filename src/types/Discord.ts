export interface Field {
    name?: string,
    value?: string,
    inline?: boolean,
}

export interface Author {
    name?: string
    url?: string
    iconUrl?: string
}

export interface Title {
    name?: string
    url?: string
}

export interface Guild {
    id: string
    name: string
    icon?: string
    members_count?: number
}
