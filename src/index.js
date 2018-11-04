import React, { useState } from "react";
import { render } from "react-dom";

import GithubListClass from './lessons/1-useState-useEffect/GithubListClass';
import GithubListHooks from './lessons/1-useState-useEffect/GithubListHooks';

import QuotesList from './lessons/2-custom-hooks/QuotesList';
import QuotesListRefactor from './lessons/2-custom-hooks/QuotesListRefactor';

import './styles.scss';

const App = () => {
  return (
    <div>

      {/* LESSON 1 - useState and useEffect*/}
        {/* <GithubListClass/> */}
        {/* <GithubListHooks/> */}

      {/* LESSON 2 - custom hooks*/}
        {/* <QuotesList/> */}
        <QuotesListRefactor/>

      {/* LESSON 3 - To Be Defined*/}
    </div>
  );
};

render(<App />, document.getElementById("app"));
