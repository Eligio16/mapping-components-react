import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

const App = () => (
  <div>
    <h1>
      <span>emojipedia</span>
    </h1>

    <dl className="dictionary">
      {emojipedia.map((emojipedia) => (
        <Card
          key={emojipedia.id}
          emoji={emojipedia.emoji}
          name={emojipedia.name}
          meaning={emojipedia.meaning}
        />
      ))}
      ;
    </dl>
  </div>
);

export default App;
