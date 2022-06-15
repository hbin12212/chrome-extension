/*global chrome*/

import React, { useState, useEffect } from "react";
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
            <div>
                {topSitesList?.map((it: { url: string; title: string }, idx: number) => (
                    <div className="pming-topsites-data" id={`pming-topsites-${idx}`}>
                        <div>{it?.url}</div>
                        <div>{it?.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSites;
