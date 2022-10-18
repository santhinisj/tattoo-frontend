import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Listing from "./components/Listing";
import Inspirations from "./components/Inspirations";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index path="blogs" element={<Home />} />
    //       {/* <Route path="blogs" element={<Blogs />} /> */}
    //       {/* <Route path="contact" element={<Contact />} /> */}
    //       {/* <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/listing" element={<Listing />}></Route>
        <Route path="/inspirations" element={<Inspirations />}></Route>
        <Route path="/signup" element={<Home signup={true}/>} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/shop" component={Shop} /> */}
        {/* <Route component={Error} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
