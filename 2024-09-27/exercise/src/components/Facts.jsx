import { CircularProgress, Box } from '@mui/material';

import useFacts from '../hooks/useFacts';

export default function Facts() {
  const { facts, isLoading } = useFacts();

  return (
    <div>
      <h2>Cat Facts</h2>
      {isLoading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        <ul>
          {facts.map((fact) => (
            <li key={fact.length}>{fact.fact}</li>
          ))}
        </ul>
      )}
    </div>
  )
}