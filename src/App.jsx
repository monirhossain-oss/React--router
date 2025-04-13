import './App.css'
import Navber from './components/navber/Navber'
import PricingOptions from './components/cardComponents/pricingOptions'
import { Suspense } from 'react';
const prichingPromised = fetch('pricingsData.json').then(res => res.json());
// console.log(prichingPromised)

function App() {
  return (
    <>
      <header>
        <Navber></Navber>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOptions prichingPromised={prichingPromised}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
