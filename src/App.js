function App() {
  const title = "User App";
  const isAuthorized = true;

  return (
    <div className="container">
      <h5>{title}</h5>
      <label htmlFor="name">Name</label>
      
      {
        isAuthorized ? <p>Authorized</p> : <p>Not Authorized</p>
      }

      <p className="lead">This is a sample text</p>
    </div>
  );
}

export default App;
