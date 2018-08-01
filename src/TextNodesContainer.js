import React from 'react'
import TextNode from './TextNode'
import Splitting from './split'

class TextNodesContainer extends React.Component {
  constructor() {
    super()

    this.state = {text: 'This is the default text.'}
    this.state.textNodes = this.createNodes()
  }

  updateText(start, end, newValue, cursorPosition) {
    console.log(arguments)
    let newText = `${this.state.text.slice(0,start)}${newValue}${this.state.text.slice(end)}`
    this.setState({
      text: newText,
      cursorPosition: start + cursorPosition
    },
    () => this.updateNodes())
  }

  updateNodes() {
    console.log('updating the nodes', this.state)
    this.setState({
      textNodes: this.createNodes(),
    })
  }

  createNodes() {
    let start = 0
    let end = 0
    console.log(Splitting.regex)
    return this.state.text.split(Splitting.regex).map((text, i) => {
      start = end
      end = start + text.length
      let cursorPosition = null

      if (this.state.cursorPosition > start
        && this.state.cursorPosition <= end) {
        cursorPosition = this.state.cursorPosition - start
        console.log({cp: this.state.cursorPosition, cursorPosition, start})
      }

      let className = null
      if (Splitting.words.hasOwnProperty(text)) {
        className = 'highlight'
      }

      return (
        <TextNode
          className={className}
          text={text}
          start={start}
          end={end}
          key={`${start}s${end}e${text}-${this.state.text.length}`}
          index={i}
          handleInput={this.updateText.bind(this)}
          cursorPosition={cursorPosition}
          />)
    })
  }

  render() {
    return (
      <div>
        {this.state.textNodes}
      </div>
    )
  }
}

export default TextNodesContainer
