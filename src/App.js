import './App.css';
import ImageSlider from './components/ImageSlider';

function App() {

  const slides = [
    {url: 'http://localhost:3000/images/1.png', title: 'one'},
    {url: 'http://localhost:3000/images/2.png', title: 'two'},
    {url: 'http://localhost:3000/images/3.png', title: 'three'},
    {url: 'http://localhost:3000/images/4.png', title: 'four'},
    {url: 'http://localhost:3000/images/5.png', title: 'five'},
    {url: 'http://localhost:3000/images/6.png', title: 'six'},
    {url: 'http://localhost:3000/images/7.png', title: 'seven'},
    {url: 'http://localhost:3000/images/8.png', title: 'eight'},
    {url: 'http://localhost:3000/images/9.png', title: 'nine'},
    {url: 'http://localhost:3000/images/10.png', title: 'ten'}
  ]

  const containterStyles = {
    width: '900px',
    height: 'auto',
    margin: '0 auto',
  }

  const headerStyles = {
    textAlign: 'center'
  }

  return (
    <div>
      <h1 style={headerStyles}>Hello My slider</h1>
      <div style={containterStyles}>
        <ImageSlider slides = {slides} />
      </div>
    </div>
  );
}

export default App;
