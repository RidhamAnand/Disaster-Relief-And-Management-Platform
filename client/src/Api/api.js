const API_URL = "http://localhost:8080";

export async function loginVictim(credentials) {
  const response = await fetch(`${API_URL}/login-victim`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }
  console.log(response.json());

  return response.json();
}

export async function registerVictim(credentials) {
  const response = await fetch(`${API_URL}/register-victim`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Registration failed");
  }
  return response.json();
}

export async function loginVolunteer(credentials) {
  const response = await fetch(`${API_URL}/login-volunteer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }
  return response.json();
}

export async function registerVolunteer(credentials) {
  const response = await fetch(`${API_URL}/register-volunteer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Registration failed");
  }
  return response.json();
}
