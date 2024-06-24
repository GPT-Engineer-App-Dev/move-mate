import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';

const WorkoutForm = ({ onSubmit }) => {
  const [workout, setWorkout] = useState({
    type: '',
    duration: '',
    intensity: '',
    date: new Date().toISOString().substr(0, 10),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(workout);
    setWorkout({
      type: '',
      duration: '',
      intensity: '',
      date: new Date().toISOString().substr(0, 10),
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Workout Type</FormLabel>
          <Select name="type" value={workout.type} onChange={handleChange} placeholder="Select workout type">
            <option value="running">Running</option>
            <option value="cycling">Cycling</option>
            <option value="swimming">Swimming</option>
            <option value="weightlifting">Weightlifting</option>
            <option value="yoga">Yoga</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" name="duration" value={workout.duration} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Intensity</FormLabel>
          <Select name="intensity" value={workout.intensity} onChange={handleChange} placeholder="Select intensity">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Date</FormLabel>
          <Input type="date" name="date" value={workout.date} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="teal">Log Workout</Button>
      </VStack>
    </Box>
  );
};

export default WorkoutForm;