import Styles from './Opportunity.module.scss'
import React, { Component } from 'react'
import Image from 'next/image'

interface OpportunityProps {
    imagePath: string,
    title: string,
    side: string,
    description: string
}

export interface OpportunityObject { 
    title: string
    description: string
    imagePath?: string
}

export default class Opportunity extends Component<OpportunityProps> {
    render() {
        return (
            <div className='flex flex-row justify-center'>
                {this.props.side == 'left'
                    ? <div className={Styles['opportunity-image']}>
                        <Image src={`/assets/images/${this.props.imagePath}`} width='40' height='22.5' layout='responsive' objectFit='contain' />
                      </div> : ''}
                <div className={`flex flex-column m-top-40 width-40 ${this.props.side == 'right' ? 'm-right-20' : this.props.side == 'left' ? 'm-left-20' : ''}`}>
                    <h4 className='font-size-20'>{this.props.title}</h4>
                    <p className='font-size-15 text-gray m-top-10 width-80'>{this.props.description}</p>
                </div>
                {this.props.side == 'right'
                    ? <div className={Styles['opportunity-image']}>
                        <Image src={`/assets/images/${this.props.imagePath}`} width='40' height='22.5' layout='responsive' objectFit='contain' />
                      </div> : ''}
            </div>
        )
    }
}
