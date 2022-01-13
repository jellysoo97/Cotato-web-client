import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './components/LandingPage'

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)'}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  </Suspense>
  );
}

export default App;
