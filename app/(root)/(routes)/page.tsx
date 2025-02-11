import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
    return ( 
        <div>
            <UserButton afterSwitchSessionUrl="/"/>
        </div>
     );
}
 
export default RootPage;