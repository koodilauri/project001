import React from "react"

class SubmissionList extends React.Component {
  state = {
  }

  componentDidMount() {
    this.props.findSubmissions()
  }

  renderSubmission() {
    return this.props.submission.map((submission = [], index) =>
      <tr key={index}>
        <td className="table__td--submission">{submission.name}</td>
        <td className="table__td--submission">{submission.questname}</td>
        <td className="table__td--submission">{submission.questtime}</td>
        <td className="table__td--submission">{submission.weapon}</td>
        <td className="table__td--submission">{submission.style}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <table className="table table--submission">
          <thead>
            <tr>
              <td className="table__htd">Name</td>
              <td className="table__htd">Quest</td>
              <td className="table__htd">Time</td>
              <td className="table__htd">Weapon</td>
              <td className="table__htd">Style</td>
            </tr>
          </thead>
          <tbody className="table__tbody">
            {this.renderSubmission()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default SubmissionList