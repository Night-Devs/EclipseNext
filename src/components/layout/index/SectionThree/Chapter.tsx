import Image from 'next/image'
import React, { Component } from 'react'

interface People {
    name: string
    discriminator: string
    avatarPath: string
}

export interface ChapterProps {
    people: People[]
    title: string
    description: string
    thumbailPath?: string
}

export default class Chapter extends Component<ChapterProps> {
    render() {
        return (
            <div className='flex flex-row justify-center align-center m-bottom-40 width-100'>
                <div className='flex flex-column justify-center align-center width-v-60'>
                    <ul className='flex flex-row justify-center align-center'>
                        {this.props.people.map((val, index) =>
                            <li key={index}>
                                <div className={`flex flex-row align-center bg-dark-gray m-left-8 p-left-5 p-right-15 p-top-1 p-bottom-1 radius-05`}>
                                    <div className='flex justify-center width-v-5 height-v-5'>
                                        <Image objectFit='cover' width='100' height='100' src={`/assets/images/avatars/${val.avatarPath}`} />
                                    </div>
                                    <span className='font-size-15 m-left-10'>{val.name}<span className='text-gray'>#{val.discriminator}</span></span>
                                </div>
                            </li> 
                        )}
                    </ul>
                    <span className='font-size-15 width-v-40 text-center m-top-10'>{this.props.description}</span>
                </div>
                <div className='flex flex-column align-center'>
                    <h1 className='font-size-15 '>{this.props.title}</h1>
                    <div className='flex justify-center width-v-10 height-v-10 m-top-10 align-center'>
                        <img src={`/assets/images/history/${this.props.thumbailPath}`} width='100%' className='fit-contain' />
                    </div>
                </div>
            </div>
        )
    }
}
