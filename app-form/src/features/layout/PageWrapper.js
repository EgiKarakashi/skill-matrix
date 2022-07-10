import Box from "@mui/material/Box";

export const PageWrapper = (props) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100vh",
      backgroundColor: "rgba(245, 198, 161, 0.8)",
      border: "1px solid white",
      borderColor: "primary.light",
      overflow: "scroll",
      pt: 2,
      pb: 2
    }}
  />
);
