import UserSearch from "./components/UserSearch";
import { Toaster } from "sonner";

const App = () => {
    return (
        <div className="container">
            <h3>Project OtherMe 2</h3>
            <UserSearch />
            <Toaster />
        </div>
    );
};

export default App;
