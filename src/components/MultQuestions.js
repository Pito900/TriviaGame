import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class MultQuestions extends React.Component {
  render() {
      const {
          category,
          question,
          type,
          difficulty,
          correct_answer,
          incorrect_answers,
      } = this.props
    return (
      <div>
        <h2 data-testid='question-category'> { category }</h2>
        <h3 data-testid='question-text'>{ question }</h3>
          <div>
            <label htmlFor={4}>
              {correct_answer}
              <input data-testid="correct-answer" type='radio' id={4}/>
            </label> 
            <label htmlFor='0'>
              {incorrect_answers[0]}
              <input data-testid='wrong-answer-0'  type='radio' id='0'/>
            </label>
            <label htmlFor='1'>
              {incorrect_answers[1]}
              <input data-testid={`wrong-answer-1`}  type='radio' id={1}/>
            </label>
            <label htmlFor={2}>
              {incorrect_answers[2]}
              <input data-testid={`wrong-answer-2`}  type='radio' id={2}/>
            </label> 
          </div>
      </div>
    );
  }
}

// MultQuestions.propTypes = {
//   dispatch: PropTypes.func,
// }.isRequired;

export default MultQuestions;



 {/* {MultipleVector.map((item) => {
            if (correct_answer === item) {
               return ( <label htmlFor={item}>
                   {item}
                   <input data-testid="correct-answer" type='radio' id={item}/>
                </label> )
            } else {
               return ( <label>
                   {item}
                   <input data-testid={`wrong-answer`}  type='radio' id={item}/>
                </label> )
            }
        })} */}
