import React, { Component, CSSProperties, MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
    className?: string
    children?: ReactNode
    style?: CSSProperties
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default class Button extends Component<ButtonProps> {
  render() {
    return (
        <button style={this.props.style || {}} className={`btn m-top-50 font-size-13 ${this.props.className || ''}`} onClick={this.props.onClick}>
            {this.props.children || ''}
        </button>
    )
  }
}
