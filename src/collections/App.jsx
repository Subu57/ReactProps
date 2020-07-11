import React from "react";
import Cards from "./Cards";

function App(){
return (
<div>
<h1>My Contacts</h1>
<Cards name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" num="+123 456 789" email="b@beyonce.com"/> 
<Cards name="subu" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" num="+123 456 789" email="subu.com"/> 
</div>
);
}
export default App;