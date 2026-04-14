import React  from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
       <Header />   

        <Menu />
       <Footer />
    </div>
  ); 
   
    
}
function Header() {
return (
    <header className="header">
        <h1>Fast React Pizza Co.</h1>
    </header>
);

    }
function Menu() {
    const pizzas = pizzaData;
    return (
        <main className="menu">
            <h2>Our Menu</h2>   
            {pizzas.length > 0 ? (
                <>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, and delicious!</p>
                <ul className="pizzas">
                    {/* {pizzaData.map(pizza => <Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} />)} */}
                {pizzas.map((pizza)=> (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
                </ul>  </>    
            ) : (
                <p>We are still working on our menu. Please come back later.</p>
            )} 
 
            {/* <Pizza name="Margherita" ingredients="Tomato and mozarella" photoName="pizzas/margherita.jpg" price={10} />
            <Pizza name="Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photoName="pizzas/spinaci.jpg" price={12} />
            <Pizza name="Funghi" ingredients="Tomato, mozarella, mushrooms, and onion" photoName="pizzas/funghi.jpg" price={12} />
            <Pizza name="Salamino" ingredients="Tomato, mozarella, and pepperoni" photoName="pizzas/salamino.jpg" price={15} />
            <Pizza name="Prosciutto" ingredients="Tomato, mozarella, ham, aragula, and burrata cheese" photoName="pizzas/prosciutto.jpg" price={18} /> */}

        </main>
    );

}
function Pizza({pizzaObj}) {
    const soldOut = pizzaObj.soldOut;
  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{{soldOut} ? "SOLD OUT" : `$${pizzaObj.price.toFixed(2)}`}</span>
    </li>
  );
}
function Footer() {
    const hour = new Date().getHours();
    const openHour = 16;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    return (
        <footer className="footer">

            {isOpen ? <Order openHour={openHour} closeHour={closeHour} /> : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00.</p>  }
        
        </footer>
    );
}
function Order({ openHour, closeHour }) {
    return (
        <div className="order">
        <p>We are open until {closeHour}. Come visit us or order online.</p>
        <button className="btn">Order</button>
        </div>
)};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>    
    <App />
  </React.StrictMode>
);