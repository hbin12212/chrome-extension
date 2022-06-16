"use strict";

import React, { useState, useEffect } from "react";
import BookMark from "./pages/BookMark";
import TopSites from "./pages/TopSites";
import "./App.css";

const App = () => {
    return (
        <div className="pming-App">
            <BookMark />
            <TopSites />
        </div>
    );
};

export default App;
