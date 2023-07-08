import "./styles.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import MultiChange from "./components/multiChange";

export default function App() {
  return (
    <Provider store={store}>
      <MultiChange />
    </Provider>
  );
}
