import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

const WorkoutList = ({ workouts }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Your Workouts</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Duration</Th>
            <Th>Intensity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {workouts.map((workout, index) => (
            <Tr key={index}>
              <Td>{workout.date}</Td>
              <Td>{workout.type}</Td>
              <Td>{workout.duration} minutes</Td>
              <Td>{workout.intensity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default WorkoutList;