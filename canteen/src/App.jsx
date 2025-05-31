import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Veg from './Components/Veg';
import NonVeg from './Components/NonVeg';
import Both from './Components/Both';
import React from 'react';
import Navbar from './Components/Navbar'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home/*" element={<Home />}>
        <Route path="veg" element={<Veg />} />
        <Route path="non-veg" element={<NonVeg />} />
        <Route path="both" element={<Both />} />
        {/* Optional: Default content for /home */}
        {/* <Route index element={<Veg />} /> */}
      </Route>
    </Routes>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab exercitationem impedit ex. Itaque, illo numquam? Magni cupiditate perferendis a sed soluta, ex et omnis alias ratione harum cumque tempore labore!
    Veritatis esse, natus quas blanditiis necessitatibus ex, ipsum velit ad quis magni sapiente aliquid enim fugit nesciunt id laborum, vero tenetur omnis rem nihil sit corporis adipisci dignissimos? Magni, qui.
    Inventore debitis nihil quo consequatur nostrum assumenda? Consequatur tenetur quo incidunt minima nesciunt ipsa facilis dolores? Explicabo vel eius porro nulla assumenda repudiandae fugiat eos, accusamus eveniet libero, quam quas!
    Natus quis quibusdam voluptas ipsum maiores nobis, fugiat dolores commodi dolorem fugit, velit blanditiis nihil similique nam officiis quidem doloribus placeat reprehenderit aut repellendus distinctio harum sequi tempora. Molestiae, laudantium!
    Nisi, sit nostrum. Ex assumenda a neque dolore voluptate tenetur maiores eos non quibusdam error quaerat voluptatum nesciunt reiciendis qui quas veritatis cumque consectetur eligendi sequi amet ab, vitae fuga.
    Harum libero ullam nobis veniam! Aliquid ex nostrum beatae rerum assumenda quasi. Culpa ratione corrupti labore est maxime fugit quos, explicabo asperiores sit incidunt eveniet, fuga placeat vitae, necessitatibus earum.
    Natus odit numquam quae a ullam? Quaerat tempora iure qui quis natus molestias, nostrum quisquam reiciendis debitis ea id commodi minima fugit atque ad eaque voluptatum officiis impedit quae magni!
    Excepturi libero iste vitae beatae, voluptatem doloribus sequi nesciunt distinctio expedita quidem adipisci veritatis repellendus temporibus similique. Repellat praesentium, asperiores nisi magnam eius, nostrum explicabo vel vero obcaecati delectus possimus!
    Quos ea tempore molestiae consequatur doloremque, quae impedit possimus officiis tempora earum maiores harum, dolorem magnam accusantium? Quasi nemo facilis esse saepe fugit magni voluptates, illum, repellat numquam, corrupti odit?
    Ipsum blanditiis iure modi similique porro voluptates libero hic, quos reprehenderit nostrum eveniet ducimus, cum aliquam alias sed accusamus quas ea voluptatum doloremque saepe, facere deserunt possimus asperiores inventore! Suscipit!
    </>
  );
}

export default App;
