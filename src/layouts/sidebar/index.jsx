import Account from "./acoount";
import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
    return (
        <aside className="w-[265px] overflow-auto max-h-screen flex flex-col min-h-screen">
            <Logo />
            <Menu />
            <Account/>
        </aside>
    )
}