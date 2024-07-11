import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: 8,
      "& .MuiInputBase-input": {
        color: "#fff", // White text in input fields
      },
      "& .MuiInputLabel-root": {
        color: "#bbb", // Light grey labels
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#555", // Border color of input fields
        },
        "&:hover fieldset": {
          borderColor: "#888", // Border color on hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "#fff", // Border color when focused
        },
      },
    },
  },
  paper: {
    padding: 16,
    border:'2px solid gray',
    borderRadius: 15,
    background: "linear-gradient(45deg, #000 30%, #000 90%)", // Black background
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    color: "#fff", // White text color
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    padding: 16,
    borderRadius: 15,
    background: "linear-gradient(45deg, #000 30%, #010 10%)", // Black background
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.9)",
    borderColor: "#555",

  },
  sap: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  typography: {
    color: "#fff", // White text color for Typography
  },
}));
