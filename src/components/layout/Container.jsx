import styles from "./Container.module.css";
function Container(props) {
  return (
    <div
      className={`${styles.container} ${
        ""
        //w-full max-w-7xl flex justify-between my-0 mx-auto flex-wrap
      } 
        ${styles[props.customClass]}`}
    >
      {props.children}
    </div>
  );
}
export default Container;
