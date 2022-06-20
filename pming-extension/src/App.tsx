import BookMark from "./pages/BookMark";
import TopSites from "./pages/TopSites";
import UserBookMark from "./pages/UserBookMark";
import "./App.css";

const App = () => {
    return (
        <div className="pming-App">
            <BookMark />
            <TopSites />
            <UserBookMark />
        </div>
    );
};

export default App;
