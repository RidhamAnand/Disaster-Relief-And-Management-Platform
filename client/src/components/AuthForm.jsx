import React from "react";
import { Button, TextField, Typography, Box, Paper } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  loginVictim,
  registerVictim,
  loginVolunteer,
  registerVolunteer,
} from "../Api/api";

const AuthForm = ({ isLogin }) => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  // Determine the appropriate mutation function
  const mutationFn =
    role === "volunteer"
      ? isLogin
        ? loginVolunteer
        : registerVolunteer
      : isLogin
      ? loginVictim
      : registerVictim;

  // Set up mutation
  const { mutate, isLoading, error } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      console.log("Success:", data);
    },
    onError: (error) => {
      console.error("Error:", error.message);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      password,
      name,
      phone,
      location,
      preferences,
      availability,
    } = event.target.elements;

    const payload = {
      email: email.value,
      password: password.value,
    };

    if (!isLogin) {
      payload.name = name.value;
      payload.phone = phone.value;
      payload.location = location.value;
      if (role === "volunteer") {
        payload.preferences = preferences.value;
        payload.availability = availability.value;
      }
    }

    mutate(payload);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          bgcolor: "#f0f0f0",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {isLogin ? "Login" : "Sign Up"} as{" "}
            {role === "volunteer" ? "Volunteer" : "Victim"}
          </Typography>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          {!isLogin && (
            <>
              <TextField
                label="Name"
                name="name"
                type="text"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Phone"
                name="phone"
                type="text"
                fullWidth
                margin="normal"
                required
              />
            </>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={isLoading}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          {error && <p>{error.message}</p>}
        </Box>
      </Paper>
    </div>
  );
};

export default AuthForm;
