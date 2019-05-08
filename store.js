import { createStore } from 'redux'

export const actionTypes = {}

const initialState = {
  products: [
    {
      name: "Chemex",
      description:
        "Brew coffee the way it was meant to be brewed! With this high quality glass pour-over contraption, you'll have some amazing coffee in 25-45 minutes. But don't worry, it'll be worth the wait.",
      price: 95,
      image: 'url',
      id: 1,
    },
    {
      name: "Espresso Machine",
      description:
        "Enjoy the finest caffeine charged brews that the coffee world has to offer! Whether you're interested in making a traditional strong drink or trying to brew your own Starbucks knockoff, this machine can do it all.",
      price: 3000,
      image: 'url',
      id: 2,
    },
    {
      name: "Dark Night Coffee",
      description:
        "Enjoy 40 ounces of the world's finest coffee beans. You can request that they be ground or for whole variety. This coffee isn't joking around and is certain to keep the bad guys away.",
      price: 40,
      image: 'url',
      id: 3,
    },
    {
      name: "Coffee Filters",
      description:
        "Nothing fancy. Just coffee paper to roll the perfect caffeine stogie.",
      price: 25,
      image: 'url',
      id: 4,
    },
    {
      name: "Coffee T-Shirt",
      description:
        "What goes better with coffee than a plain white tshirt? Wear those coffee stains with pride, you whole bean warrior you.",
      price: 15,
      image: 'url',
      id: 5,
    },
    {
      name: "Coffee Mug",
      description:
        "Standard survival gear for any up and coming coffee enthusiast. Enjoy coffee from anywhere with this perfectly sized caffeine container.",
      price: 20,
      image: 'url',
      id: 6,
    },
    {
      name: "Last Chance Coffee",
      description:
        "While we think that coffee should always come first here at Coffee First, we know that you have to sleep sometime. This decaffeinated coffee is perfect for when you need that last sip of the day right before bed.",
      price: 40,
      image: 'url',
      id: 7,
    },
    {
      name: "Coffee Pants",
      description:
        "These are the perfect pants to drink your coffee in. Why is that you ask? Well, because all pants are great for drinking coffee.",
      price: 35,
      image: 'url',
      id: 8,
    },
    {
      name: "Single Serve Pour-Over",
      description:
        "You don't need people. Just coffee. This single serve pour-over makes for that perfect date with just you and that cup-o-joe.",
      price: 45,
      image: 'url',
      id: 9
    },
  ]
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export function initializeStore(initialState = initialState) {
  return createStore(reducer, initialState)
}