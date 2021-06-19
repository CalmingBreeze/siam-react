import Board from './Board';
import Footer from './Footer';
import Navbar from './Navbar';
import Version from './Version';

function Layout(props) {
  return (
    <main className="App">
      <Navbar appData={props.appData} />
      <Version appData={props.appData} />
      <Board />
      <Footer appData={props.appData} />
    </main>
  );
}

export default Layout;
