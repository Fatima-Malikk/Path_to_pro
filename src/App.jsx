import _Routes from './routes';
const webRoutes = _Routes();


/**
 * Base Template component holding the basic web application
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="App">
      {webRoutes}
      {/* {_Routes} */}
    </div>
  );
}

export default App;