import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonsContainer";

function App() {
  return <>
    <div className={styles.calculator} >
       <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  </>;
}

export default App;
