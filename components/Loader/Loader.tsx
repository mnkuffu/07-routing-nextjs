import { RingLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader({ loading = true }) {
  return (
    <div className={css.loaderWrapper}>
      <RingLoader
        color="#0d6efd"
        loading={loading}
        size={80}
        speedMultiplier={1}
      />
      <p className={css.text}>Loading, please wait...</p>
    </div>
  );
}