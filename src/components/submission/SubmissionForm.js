import React, { Component } from "react"
import { connect } from "react-redux"

import { updateFormField, validateForm } from "../../actions/form"

import SearchSelectionInput from "../ui/SearchSelectionInput"
import SelectTimeInput from "../ui/SelectTimeInput"

class SubmissionForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submit()
  }

  handleChange(field, e) {
    this.props.updateFormField("submission", field, e.target.value)
  }

  selectItem = (field, item) => {
    this.props.updateFormField("submission", field, item)
  }

  setTime = (unit, amount) => {
    this.props.updateFormField("submission", unit, amount)
  }

  render() {
    const { submissionForm, quests } = this.props
    const { values, errors } = submissionForm
    return (
      <div className="submission-form--container">
        <form className="submission-form form-horizontal" onSubmit={this.handleSubmit}>
          <div className={errors.name.lenght === 0 ? "form-group submission-form--name" : "form-group has-error submission-form--name"}>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
              value={values.name}
              onChange={this.handleChange.bind(this, "name")}
            />
            {errors.name.map((error, i) =>
              <label className="control-label submission-form--name-error" key={i}>{error.message}</label>
            )}
          </div>
          <SearchSelectionInput item="quest" items={quests} selectItem={this.selectItem} errors={errors.quest} />
          <SelectTimeInput setTime={this.setTime} />
          <div className="form-group submission-submit">
            <button type="submit" className="btn btn-primary submission-submit--btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  submissionForm: state.form.submission,
  armorSetForm: state.form.armorSet,
  quests: state.quest.quests,
})

const mapDispatchToProps = dispatch => ({
  updateFormField(form, field, value) {
    dispatch(updateFormField(form, field, value))
  },
  validateForm(form) {
    dispatch(validateForm(form))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionForm)