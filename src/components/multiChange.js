import React from "react";
import "../styles.css";
import { Change } from "./change";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { changeActions } from "../store/store";
import { v4 as uuid } from "uuid";

const generate_random_id = () => {
  return uuid().slice(0, 6);
};

export default function MultiChange() {
  const array = Object.keys(useSelector((state) => state.changeStore)).filter(
    (key) => key !== "removed_items"
  );
  const { removed_items } = useSelector((state) => state.changeStore);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(changeActions.handleAdd({ id: generate_random_id() }));
  };

  return (
    <Provider store={store}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "fixed",
          right: "5%",
          dispaly: "flex",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        <span>Add Item</span>
        <IconButton onClick={handleAddItem}>
          <AddIcon />
        </IconButton>
      </Stack>
      <Stack className="container" spacing={2}>
        {array.map((el, i) => (
          <Change
            className={removed_items.includes(el) ? "removed" : "exists"}
            id={el}
          />
        ))}
      </Stack>
    </Provider>
  );
}
