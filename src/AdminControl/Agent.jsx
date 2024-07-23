import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';

const initialAgents = [
  { id: 1, name: 'Agent Smith', authority: 'Local', state: 'California', area: 'Los Angeles', position: 'Senior Agent' },
  { id: 2, name: 'Agent Johnson', authority: 'Federal', state: 'New York', area: 'Manhattan', position: 'Agent' },
  // Add more dummy agents as needed
];

const Agent = () => {
  const [agents, setAgents] = useState(initialAgents);
  const [editAgent, setEditAgent] = useState(null);

  const handleEditClick = (agent) => {
    setEditAgent({ ...agent });
  };

  const handleSave = () => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === editAgent.id ? { ...editAgent } : agent
      )
    );
    setEditAgent(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditAgent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Agents
      </Typography>
      {editAgent ? (
        <Box sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: 2, boxShadow: 2 }}>
          <Typography variant="h6" gutterBottom>
            Edit Agent
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Name"
              name="name"
              value={editAgent.name}
              onChange={handleChange}
              fullWidth
              sx={{ bgcolor: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="Authority"
              name="authority"
              value={editAgent.authority}
              onChange={handleChange}
              fullWidth
              sx={{ bgcolor: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="State"
              name="state"
              value={editAgent.state}
              onChange={handleChange}
              fullWidth
              sx={{ bgcolor: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="Area"
              name="area"
              value={editAgent.area}
              onChange={handleChange}
              fullWidth
              sx={{ bgcolor: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="Position"
              name="position"
              value={editAgent.position}
              onChange={handleChange}
              fullWidth
              sx={{ bgcolor: '#fff', borderRadius: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
              Save
            </Button>
          </Stack>
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom>
            Agent List
          </Typography>
          <div className='flex gap-6 mt-8 ml-5 w-fit flex-wrap flex-1'>
            {agents.map((agent) => (
              <Box
                key={agent.id}
                sx={{
                  border: '1px solid #ddd',
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 1,
                  bgcolor: '#fafafa',
                }}
              >
                <Typography variant="body1"><strong>Name:</strong> {agent.name}</Typography>
                <Typography variant="body1"><strong>Authority:</strong> {agent.authority}</Typography>
                <Typography variant="body1"><strong>State:</strong> {agent.state}</Typography>
                <Typography variant="body1"><strong>Area:</strong> {agent.area}</Typography>
                <Typography variant="body1"><strong>Position:</strong> {agent.position}</Typography>
                <Button variant="outlined" onClick={() => handleEditClick(agent)} sx={{ mt: 2 }}>
                  Edit
                </Button>
              </Box>
            ))}
          </div>
        </Box>
      )}
    </div>
  );
};

export default Agent;
