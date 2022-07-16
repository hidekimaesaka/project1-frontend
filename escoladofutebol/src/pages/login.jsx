import { Box, TextField, Button } from "@mui/material";

export default function Login() {
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tPApeMn7OtO2UWKJw-JKkXAYABH7Coa_9g&usqp=CAU"
          alt="sex"
        />
      </section>
      <section className="lower-section">
        <Box
          component="form"
          sx={{
            display: "flex",
            "flex-direction": "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <TextField type="email" label="e-mail" sx={{ width: "25vw" }} />
          <TextField type="password" label="password" sx={{ width: "25vw" }} />
          <Button
            variant="contained"
            sx={{
              width: "25vw",
              backgroundColor: "white",
              "&:hover": { backgroundColor: "black", color: "white" },
            }}
          >
            Log-in!
          </Button>
        </Box>
      </section>
    </div>
  );
}
