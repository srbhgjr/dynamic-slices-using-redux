import { Stack, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { defaultChangeState } from "../store/changeSlice";
import { changeActions } from "../store/store";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const btn_styles = {
  padding: "0rem",
  fontSize: "1.35rem"
};

export function Change(props) {
  const { id } = props;
  const dispatch = useDispatch();
  const { change } = useSelector(
    (state) => state.changeStore[id] || defaultChangeState
  );

  const handleChange = (type) => {
    if (type === "+") {
      dispatch(changeActions.handleChange({ id: id, value: change + 1 }));
    } else if (type === "-") {
      dispatch(changeActions.handleChange({ id: id, value: change - 1 }));
    }
  };

  const handleRemoveItem = () => {
    dispatch(changeActions.handleDelete({ id: id }));
  };

  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "15rem"
      }}
    >
      <Button
        variant="outlined"
        sx={btn_styles}
        onClick={() => handleChange("+")}
      >
        +
      </Button>
      <span style={{ display: "felx", justifyContent: "center" }}>
        {change}
      </span>
      <Button
        variant="outlined"
        sx={btn_styles}
        onClick={() => handleChange("-")}
      >
        -
      </Button>
      <IconButton onClick={handleRemoveItem}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}
