import './App.css';
import PlainFunctions from "./topics/PlainFunctions";
import GetMutipleValues from "./topics/GeneratorFunction";
import ObjectToArrays from "./topics/ObjectToArrays";
import DangerousInnerHtml from "./topics/DangerousInnerHtml";
import Pagination from "./topics/pagination/Pagination";

function App() {
  return (
    <div className="App">
     <PlainFunctions />
     <GetMutipleValues />
     <ObjectToArrays />
     <DangerousInnerHtml />
     <Pagination />
    </div>
  );
}

export default App;
