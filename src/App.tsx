import { useState } from "react";
import ExpandableTxt from "./Components/ExpandableTxt/ExpandableTxt";

const App = () => {
  return (
    <div>
      <ExpandableTxt maxChars={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        ratione. Aut a, excepturi temporibus odit deleniti iste officia labore
        repellat non dolore hic eius! Earum consequatur ipsam laudantium nemo
        vero, voluptates explicabo atque quasi ducimus, sapiente consequuntur
        voluptas? Ipsum suscipit sed alias libero provident consequatur fugiat
        mollitia esse debitis minus.
      </ExpandableTxt>
    </div>
  );
};

export default App;
