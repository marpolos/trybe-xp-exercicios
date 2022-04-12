import logo from './logo.svg';
import './App.css';
import GreetingFunction from './GreetingFunction';
import GreetingClass from './GreetingClass';
import NameLastName from './NameLastName';
import Image from './Image';
import Album from './Album';
import Order from './Order';

function App() {
  const album01 = {
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
    title: 'Mylo Xyloto',
    releaseDate: {
      year: '2011',
      month: '10',
      day: '24',
    },
    others: {
      recordCompany: 'Capitol, Parlophone',
      formats: 'CD, digital'
    }
  };
  const album02 = {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
    title: 'Ghost Stories',
    releaseDate: {
      year: '2014',
      month: '05',
      day: '16',
    },
    others: {
      recordCompany: 'Parlophone',
      formats: 'CD, digital'
    }
  };
  const headphone = {
    id: 102,
    user: "cena@gmail.com",
    product: "Razer Headphone",
    price: {
      value: 99.99,
      currency: "dollars"
    }
  };

  const energyDrink = {
    id: 77,
    user: "cena@gmail.com",
    product: "Monster 500mL",
    price: {
      value: 9.99,
      currency: "dollars"
    }
  };
  return (
    <div>
      < GreetingFunction name='Marcelle'/>
      < GreetingClass name='Jhonata' />
      < NameLastName name="Samuel" lastName="Silva" />
      < Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
      < Album album={album01} />
      < Album album={album02} />

      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */
         <Order order={ headphone }/>
         //<Order order={ energyDrink } />
         }
      </div>
    </div>
  );
}

export default App;
