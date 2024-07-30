import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const ContactFormDialog = ({ open, onClose }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSend = () => {
    // Handle form submission here
    console.log('Form Values:', formValues);
    onClose(); // Close the dialog after sending the message
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Contact Us</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Your Name"
          fullWidth
          variant="outlined"
          value={formValues.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={formValues.description}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSend} color="primary">
          Send Message
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactFormDialog;
