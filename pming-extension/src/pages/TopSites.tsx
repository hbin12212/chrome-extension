/*global chrome*/

import React, { useState, useEffect } from "react";
import { Link } from "react-chrome-extension-router";
import "./TopSites.css";

const TopSites = () => {
    const [topSitesList, setTopSitesList] = useState<{ url: string; title: string }[]>([]);

    useEffect(() => {
        getTopSitesList();
    }, []);

    const getTopSitesList = () => {
        //@ts-ignore
        chrome.topSites.get((result: { url: string; title: string }[]) => {
            console.log(result);
            setTopSitesList(result);
        });
    };

    return (
        <div className="pming-TopSites">
            <div className="pming-topsites-wrapper">
                {topSitesList?.map((it: { url: string; title: string }, idx: number) => (
                    <div className="pming-topsites-data" id={`pming-topsites-${idx}`}>
                        <a href={`${it?.url}`}>
                            <img src={`https://www.google.com/s2/favicons?sz=24&domain=${it?.url}`} />
                            <div>{it?.title}</div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSites;
