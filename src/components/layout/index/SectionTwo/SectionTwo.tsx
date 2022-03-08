import Opportunity, { OpportunityObject } from './Opportunity'
import React, { Component } from 'react'
import Styles from './SectionTwo.module.scss'

export default class SectionTwo extends Component {
    render() {
        const opportunities: OpportunityObject[] = [{
            title: 'Приветствия и прощания',
            description: 'Поприветствуйте новых людей на вашем сервере, дайте автоматически им роли и сделайте уведомление чьём-то уходе!'
        }, {
            title: 'Картинки',
            description: 'Выражайте эмоции с помощью команд. Обнимите, погладьте или ударьте за провинность!'
        }, {
            title: 'Полезные команды',
            description: 'Создайте голосование, посчитайте пример, используйте рандомайзер и много чего другого быстро и без лишних телодвижений'
        }, {
            title: 'Приватные голосовые каналы',
            description: 'Удалите вашу сотню каналов! Пускай их будет всегда столько, сколько надо в текущий момент!'
        }, {
            title: 'Авто-модерация',
            description: 'Защитите свой сервер от спам рассылок! Запретите отправку ссылок-приглашений на другие сервера.'
        }]

        return (
            <section className='flex align-center flex-column m-top-40'>
                <h1 className='font-size-25 m-bottom-10'>Что я умею?</h1>
                <ul className='flex align-center flex-column'>
                    {opportunities.map((val, index) =>
                        <li className='flex m-top-18 justify-center' key={index}>
                            <Opportunity
                                imagePath={val.imagePath ? val.imagePath : `opportunities/${index+1}.png`}
                                title={val.title}
                                side={index % 2 ? 'right' : 'left'}
                                description={val.description}
                            />
                        </li>
                    )}
                </ul>
                <h1 className='font-size-25 m-top-30 m-bottom-40'>И многое другое!</h1>
            </section>
        )
    }
}
