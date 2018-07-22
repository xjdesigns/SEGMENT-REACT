import React, { Component } from "react";
import { connect } from 'react-redux'
import Worker from './Worker'

export class TextInput extends Component {
  handleThing = () => {
    const { isSidebarOpen } = this.props
    if (isSidebarOpen) {
      return <div>First level STATE:: CHANGED TRUE</div>
    } else {
      return <div>First level STATE:: CHANGED FALSE</div>
    }
  }

  render () {
    const Thing = this.handleThing()

    return (
      <div>
        <div>Hello World</div>
        {Thing}
        <Worker />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { layout } = state
  const { isSidebarOpen } = layout
  return {
    isSidebarOpen,
  }
}

export default connect(mapStateToProps)(TextInput)
