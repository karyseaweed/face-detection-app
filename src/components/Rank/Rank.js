import React from 'react';

class Rank extends React.Component {
  constructor() {
    super();
    this.state = {
      grade: '',
    };
  }

  componentDidMount() {
    this.generateGrade(this.props.entries);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.entries === this.props.entries &&
      prevProps.name === this.props.name
    ) {
      return null;
    }
    this.generateGrade(this.props.entries);
  }

  generateGrade = (entries) => {
    // fetch our lambda function
    fetch(
      `https://brz9ucl76g.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`
    )
      .then((resp) => resp.json())
      .then((data) => this.setState({ grade: data.input }))
      .catch(console.log);
  };

  render() {
    return (
      <div>
        <div className='white f3'>{`${this.props.name}, your current entry count is...`}</div>
        <div className='white f1'>{this.props.entries}</div>
        <div className='white f3'>{`Grade: ${this.state.grade}`}</div>
      </div>
    );
  }
}

export default Rank;
