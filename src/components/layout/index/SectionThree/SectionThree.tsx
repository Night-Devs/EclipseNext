import Footer from '../../../general/Footer/Footer'
import Chapter, { ChapterProps } from './Chapter'
import Styles from './SectionThree.module.scss'
import React, { Component } from 'react'

export default class SectionThree extends Component {
    render() {
        const chapters: ChapterProps[] = [{
            people: [{
                avatarPath: 'Electroplayer.png',
                name: '[ElectroPlayer]',
                discriminator: '0256'
            }, {
                avatarPath: 'Lokilife.png',
                name: 'Lokilife',
                discriminator: '3331'
            }],
            description: 'В одно из затмений реальность соприкоснулась с мечтой и мы начали творить. Мы создали идею бота, задали чёткие правила, которым он следует, но этого мало для воплощения идеи в жизнь!',
            title: 'Касание',
        }, {
            people: [{
                avatarPath: 'Lookins.png',
                name: 'Lookins',
                discriminator: '1917'
            }, {
                avatarPath: 'Ueuecoyotl.png',
                name: 'Ueuecoyotl',
                discriminator: '4032'
            }],
            description: 'Идея не должна содержать противоречий, иначе она рассыплется в пыль при возрождении. Они нашли ошибки, баги и противоречия в идее, благодаря чему наш бот стал ещё ближе к совершенству!',
            title: 'Внедрение',
        }, {
            people: [{
                avatarPath: 'Unknown.png',
                name: 'Unknown',
                discriminator: '0001'
            }],
            description: 'Для жизни в реальности, нашему боту нужна опора, нужен проводник между миром фантазий и реальным миром. Нужен сервер, которым занялся ещё один участник ритуала.',
            title: 'Максимум',
        }, {
            people: [{
                avatarPath: 'GitRonin.png',
                name: 'GitRonin',
                discriminator: '8012'
            }, {
                avatarPath: 'Fuchs.png',
                name: 'Fuchs',
                discriminator: '9291'
            }, {
                avatarPath: 'Lokilife.png',
                name: 'Lokilife',
                discriminator: '3331'
            }],
            description: 'Эти храбрые люди создали сайт. Они будут держать на своих плечах дорогу из мира фантазий в Ваш сервер... Им осталось указать лишь путь! Так чего ждать?',
            title: 'Фиксация',
        }]

        return (
            <section className={`${Styles['section-three']} width-100 flex flex-column align-center`}>
                <h1 className='m-top-40 m-bottom-40 font-size-20'>Я появился в миг между днём и ночью</h1>
                <ul className='flex flex-column justify-center align-center width-100'>
                    {chapters.map((chapter, index) => 
                        <li className='flex justify-center align-center width-100' key={index}>
                            <Chapter
                                people={chapter.people}
                                description={chapter.description}
                                title={chapter.title}
                                thumbailPath={`${index+1}.png`} 
                            />
                        </li>
                    )}
                </ul>
                <Footer />
            </section>
        )
    }
}
