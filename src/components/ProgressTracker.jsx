import React from 'react';
import { Box, Heading, Text, VStack, HStack, Progress } from '@chakra-ui/react';

const ProgressTracker = ({ workouts }) => {
  const calculateTotalWorkoutTime = () => {
    return workouts.reduce((total, workout) => total + parseInt(workout.duration), 0);
  };

  const calculateAverageIntensity = () => {
    const intensityMap = { low: 1, medium: 2, high: 3 };
    const totalIntensity = workouts.reduce((total, workout) => total + intensityMap[workout.intensity], 0);
    return workouts.length > 0 ? (totalIntensity / workouts.length).toFixed(2) : 0;
  };

  const calculateMostFrequentWorkout = () => {
    const workoutTypes = workouts.map(workout => workout.type);
    return workoutTypes.sort((a, b) =>
      workoutTypes.filter(v => v === a).length - workoutTypes.filter(v => v === b).length
    ).pop();
  };

  return (
    <Box>
      <Heading size="lg" mb={4}>Your Progress</Heading>
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <Text>Total Workout Time:</Text>
          <Text fontWeight="bold">{calculateTotalWorkoutTime()} minutes</Text>
        </HStack>
        <HStack justify="space-between">
          <Text>Average Intensity:</Text>
          <Text fontWeight="bold">{calculateAverageIntensity()}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text>Most Frequent Workout:</Text>
          <Text fontWeight="bold">{calculateMostFrequentWorkout()}</Text>
        </HStack>
        <Box>
          <Text mb={2}>Workout Consistency:</Text>
          <Progress value={(workouts.length / 30) * 100} colorScheme="teal" />
        </Box>
      </VStack>
    </Box>
  );
};

export default ProgressTracker;