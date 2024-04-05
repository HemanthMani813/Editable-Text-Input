import {Component} from 'react'

class Card extends Component {
  state = {
    btn: false,
    inputTpye: false,
    edittext: '',
  }

  onChnageInput = event => {
    this.setState({edittext: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prevS => ({btn: !prevS.btn, inputTpye: !prevS.inputTpye}))
  }

  render() {
    const {btn, inputTpye, edittext} = this.state
    return (
      <div>
        <h1>Editable Text Input</h1>
        {btn ? (
          <p>{edittext}</p>
        ) : (
          <input type="text" value={edittext} onChange={this.onChnageInput} />
        )}
        <button type="button" onClick={this.onClickBtn}>
          {inputTpye ? 'Edit' : 'Save'}
        </button>
      </div>
    )
  }
}
export default Card
