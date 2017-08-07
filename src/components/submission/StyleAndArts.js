import React from "react"
import { connect } from "react-redux"
import { updateStyleAndArts } from "../../actions/form"
import "./StyleAndArt.css"
import SearchSelectionInput from "../ui/SearchSelectionInput"
import { initialValues } from "./styleAndArts.schema"

class StyleAndArts extends React.Component {
  state = initialValues

  handleChange(field, e) {
    const newValue = e.target.value
    let stateChange = Object.assign({}, this.state)
    stateChange[field] = newValue
    this.setState(stateChange)
    this.props.updateStyleAndArts({ selectedStyle: stateChange.selectedStyle })
    switch (newValue) {
      case "Guild":
        this.changeHunterArt(2)
        break
      case "Striker":
        this.changeHunterArt(3)
        break
      case "Adept":
        this.changeHunterArt(1)
        break
      case "Aerial":
        this.changeHunterArt(1)
        break
      default:
        break
    }
  }

  selectItem = (id, item) => {
    const newState = Object.assign({}, this.state, {
      selectedHunterArts: this.state.selectedHunterArts
        .slice(0, id)
        .concat(Object.assign({}, { id: item.id, name: item.name, gaugesize: item.gaugesize, description: item.description, weapon: item.weapon }))
        .concat(this.state.selectedHunterArts.slice(Number(id) + 1))
    })
    this.setState(newState)
    this.props.updateStyleAndArts({ selectedHunterArts: newState.selectedHunterArts })
  }

  changeHunterArt(amount) {
    const { selectedHunterArts } = this.state
    let l = selectedHunterArts.length
    if (l < amount) this.addHunterArt(amount - l)
    if (l > amount) this.removeHunterArt(amount)
  }

  addHunterArt(length) {
    const { selectedHunterArts } = this.state
    let data = [];
    for (let i = 0; i < length; i++) {
      data.push({ id: -1, name: "", gaugesize: 0, description: "", weapon: "General" });
    }
    const newState = Object.assign({}, this.state, {
      selectedHunterArts: selectedHunterArts.concat(data)
    })
    this.setState(newState)
    this.props.updateStyleAndArts({ selectedHunterArts: newState.selectedHunterArts })
  }

  removeHunterArt(index) {
    const { selectedHunterArts } = this.state
    const newState = Object.assign({}, this.state, {
      selectedHunterArts: selectedHunterArts
        .slice(0, index)
    })
    this.setState(newState)
    this.props.updateStyleAndArts({ selectedHunterArts: newState.selectedHunterArts })
  }

  render() {
    const { hunterArts } = this.props
    const { selectedHunterArts } = this.state
    return (
      <div className="style-and-arts--container">
        <table className="table-style-art">
          <thead>
            <tr>
              <th>
                Style and Hunter Arts
            </th>
            </tr>
            <tr>
              <th>
                Style
            </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select
                  name="selectedStyle"
                  onChange={this.handleChange.bind(this, "selectedStyle")}
                >
                  <option value="Guild">Guild</option>
                  <option value="Striker">Striker</option>
                  <option value="Adept">Adept</option>
                  <option value="Aerial">"Aerial"</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>
                Hunter Arts
            </th>
            </tr>
            <tr>
              <td>
                <SearchSelectionInput items={hunterArts} selectItem={this.selectItem} item="0" />
              </td>
            </tr>
            <tr>
              <td>
                {selectedHunterArts[0].gaugesize}
              </td>
            </tr>
            <tr>
              <td>
                {selectedHunterArts[1] ?
                  <SearchSelectionInput items={hunterArts} selectItem={this.selectItem} item="1" />
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>
                {selectedHunterArts[1] ? selectedHunterArts[1].gaugesize : "---"}
              </td>
            </tr>
            <tr>
              <td>
                {selectedHunterArts[2] ?
                  <SearchSelectionInput items={hunterArts} selectItem={this.selectItem} item="2" />
                  : "---"}

              </td>
            </tr>
            <tr>
              <td>
                {selectedHunterArts[2] ? selectedHunterArts[2].gaugesize : "---"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hunterArts: state.hunterArt.hunterArts,
})

const mapDispatchToProps = dispatch => ({
  updateStyleAndArts(state) {
    dispatch(updateStyleAndArts(state))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(StyleAndArts)