import { useState } from "react";
import { Box, TextField, Button, Link } from "@mui/material";
import { login } from "../services/login";
import logo from "../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login(email, password);
  };

  return (
    <div
      className="main"
      style={{
        textAlign: "center",
        display: "flex",
        "flex-direction": "column",
        alignContent: "space-between",
      }}
    >
      <section className="upper-section" style={{ height: "50vh" }}>
        <img
          src={logo}
          alt="logo"
          height="200vh"
          style={{ "margin-top": "25vh" }}
        />
      </section>
      <section
        className="lower-section"
        style={{ diplay: "flex", height: "20vh", gap: "10px" }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            "flex-direction": "column",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <TextField
            type="email"
            label="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "25vw",
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <TextField
            type="password"
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "25vw",
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: "25vw",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Log-in!
          </Button>
          <Link
            href="signin"
            underline="none"
            sx={{
              color: "white",
              "&:hover": { color: "yellow" },
            }}
          >
            {"Create an account"}
          </Link>
        </Box>
      </section>
    </div>
  );
}
