import React, { useState, useEffect } from 'react';
import { Container, VStack, Heading } from '@chakra-ui/react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';

const WorkoutLogger = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    setWorkouts(storedWorkouts);
  }, []);

  const handleSubmit = (newWorkout) => {
    const updatedWorkouts = [...workouts, newWorkout];
    setWorkouts(updatedWorkouts);
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">Workout Logger</Heading>
        <WorkoutForm onSubmit={handleSubmit} />
        <WorkoutList workouts={workouts} />
      </VStack>
    </Container>
  );
};

export default WorkoutLogger;