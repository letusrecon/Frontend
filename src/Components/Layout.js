import Sidebar from "./Dashboard/Siderbar"


export default function Layout ({children}){
    return (
        <div>

            <Sidebar/>

            <main>
                {children}
            </main>

        </div>
    )
}