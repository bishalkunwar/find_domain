import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";

export default function Home(){
    const name = require('@rstacruz/startup-name-generator');
    return(
        <div>
            <Header headTitle="this is the header"/> 
            <SearchBox/>
        </div>

    );
};