import React, { Component } from 'react'
import { Header, Footer } from '../Component/Layouts';
import Exercises from '../Component/Exercises';
import { muscles, exercises } from '../store';

class App extends Component {
  state = {
    exercises,
    exercise: {},
    category: ''
  }

  getExercisesByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        
        return exercises;
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({ category })
  }

  handleExerciseSelected = id => {
    this.setState(prevState => ({
      exercise: prevState.exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;
    return (
      <>
        <Header />
        <div style={{marginLeft: 20, marginRight: 20}}>
          <Exercises
            category={category}
            exercise={exercise}
            exercises={exercises}
            onSelect={this.handleExerciseSelected}
          />
          <Footer 
            category={ category }
            muscles={muscles}
            onSelect={this.handleCategorySelected}
          />
        </div>
        
      </>
    )
  }
}

export default App;