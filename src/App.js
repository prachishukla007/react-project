import logo from './logo.svg';
import './App.css';

const AnotherButtonByArrow = () => <button>Another Button</button> // to practice the assigning in arrow function

const Search = () => <input placeholder='Enter anything...'></input> // to know about input fields

const Header = () => { // to do inline styling (without using css), and used css too for h1
  return (
    <div style={{ backgroundColor: 'grey', display: 'flex' }}>
      <h1 className='h1'>Shopify App</h1>
      <input placeholder='Search' />
      <ul style={{ display: 'flex' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
function ButtonComponent() { // to know how to create a basic button
  return (
    <button>Increment Button</button>
  )
}

let count = 0; //to check click event

const isIncrementingEnabled = true // to check ternary operation

const products = ['Shirts', 'Pants', 'Tshirts', 'Shorts'] //Inside JSX you can NEVER use for loop, always need to use higher order functions like map, filter or any which returns an array -Wrong
const productObjectList = [{ id: 1, item: 'Shirts' }, { id: 2, item: 'Pants' }, { id: 3, item: 'Tshirts' }, { id: 4, item: 'Shorts' }] // to uniquely identify a single item in an array (good approach for react)

function App() {
  const name = "Prachi" // to check Embedding of a variable
  const age = 24 // same as name

  const onIncrementClick = () => { // this is to increase a varibales value in runtime and print
    count = count + 1;
    console.log({ count });
  }

  const onSearchChange = (event) => { // this is to print input value
    console.log(event.target.value);
  }

  return (
    <>
      <Header />
      {
        isIncrementingEnabled ? <button onClick={onIncrementClick}>Increment Button</button> : <></>
      }
      {count}
      <input onChange={onSearchChange} placeholder='Search...' />
      <ul>
        {
          productObjectList.map(product => {
            return (
              <li className={`${product.id % 2 === 0 ? "bg-color-grey" : "red"} pd-8px`}key={product.id}>{product.item}</li> // interpolation is happeing but with using template literal `, not by ' / "
            )
          })
        }
      </ul>

    </>
    // <>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>My first react app... {name}</h1>
    //     <p>My age is {age}</p>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //   <h1>This is created by Prachi Shukla</h1>
    //   <p>My first JSX component, just to test Fragments use. {name}</p>
    //   <ButtonComponent />
    //   <AnotherButtonByArrow />
    //   <Search />
    //   </header>
    // </div>
    // </>
  );
}

export default App;


/* Another way to use conditionally render elements in React we can use 
logical && operator method


It evaluates the expression on its left-hand side and, if true, renders the 
element on its right-hand side. This technique is particularly useful for 
rendering components based on boolean conditions.


Example: 

  const ConditionalRendering = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <WelcomeMessage />}
      {!isLoggedIn && <LoginPrompt />}
    </div>
  );
};

const WelcomeMessage = () => {
  return <h1>Welcome back!</h1>;
};

const LoginPrompt = () => {
  return <h1>Please log in to continue.</h1>;
};


*/