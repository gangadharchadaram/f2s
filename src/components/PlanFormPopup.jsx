import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';

const PlanFormPopup = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectDetails: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        // You can handle form submission here (e.g., send data to the server)
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Enter Your Details</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill in the form to proceed with your selected plan.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="projectDetails"
                    label="Project Details"
                    type="text"
                    multiline
                    rows={4}
                    fullWidth
                    value={formData.projectDetails}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PlanFormPopup;
