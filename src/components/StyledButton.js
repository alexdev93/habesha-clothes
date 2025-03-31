import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: "10px 20px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default StyledButton;
