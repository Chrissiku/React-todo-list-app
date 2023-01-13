import AppHeader from "./components/AppHeader";
import Title from "./components/Title";
import styles from "./styles/modules/app.module.scss";

function App() {
  return (
    <div className="app__container">
      <Title>Todo list app</Title>
      <div className={styles.app__wrapper}>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
