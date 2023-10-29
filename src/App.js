import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import ResetCounter from "./components/ResetCounter";


function App() {
  return (
    <>
    <Counter/>
    <div style={{marginTop:"20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
    <IncreaseCounter/>
    <DecreaseCounter/>
    <ResetCounter/>
    </div>
    </>
  );
}

export default App;
