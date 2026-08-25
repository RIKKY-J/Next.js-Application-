export default function layout({ children }) {
  return (
      <>
        <header style={{background : "lightgreen"}}> Header Application</header>
        {children}
        <footer style={{background : "lightgray"}}> Footer Application</footer>
      </>
  );
}