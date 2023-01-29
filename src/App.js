import header from "./Components/header";
import footer from "./Components/footer";
import content from "./Components/content";
var name = false;
function App() {
  return (
    <>
      {header()}
      {content()}
      {footer()}
    </>
  );
}

export default App;
export { name };
