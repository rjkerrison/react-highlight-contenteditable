import React from 'react'

class TextNode extends React.Component {
  handleInput(event) {
    this.props.handleInput(
      this.props.start,
      this.props.end,
      event.target.textContent,
      document.getSelection().anchorOffset
    )
  }

  componentDidMount() {
    console.log('componentDidMount', this.props, {element: this.element})
    if (this.props.cursorPosition) {
      let range = document.createRange()
      let sel = window.getSelection()
      range.setStart(this.element.childNodes[0], this.props.cursorPosition)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }

  render() {
    return (
      <div
        className={this.props.className}
        ref={(div) => { this.element = div }}
        contentEditable='true'
        onInput={this.handleInput.bind(this)}>
        {this.props.text}
      </div>
    )
  }
}

export default TextNode
