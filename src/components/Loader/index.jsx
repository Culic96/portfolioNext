import styles from "./style.module.css";
const Loader = () => {
  return (
    <>
      <div className={styles["loaderBody"]}>
        <div className={styles["loader"]}>
          <h1>Loading</h1>
          <div className={styles["spinner"]}></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
