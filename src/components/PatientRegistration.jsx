import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const PatientRegistration = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { text: newMessage, sender: "user" }]);
            setNewMessage("");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default behavior (new line)
            handleSendMessage();
        }
    };

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    return (
        <Box>
            <Box
                sx={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "16px"
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Assistant
                </Typography>
                <Box
                    sx={{
                        height: "200px",
                        overflowY: "auto",
                        marginBottom: "16px",
                        border: "1px solid #eee",
                        padding: "8px",
                    }}
                >
                    {messages.map((message, index) => (
                        <Box
                            key={index}
                            sx={{
                                textAlign: message.sender === "user" ? "right" : "left",
                            }}
                        >
                            {message.text}
                        </Box>
                    ))}
                </Box>
                <TextField
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Write your message here..."
                    value={newMessage}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <Button variant="contained" sx={{ mt: 2 }}>Send</Button>
            </Box>
        </Box >
    );
};