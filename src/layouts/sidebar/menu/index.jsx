import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { MainMenu } from "~/utils/const";

import More from "./more";
import New from "./new";

export default function Menu() {
    return (
        <div className="mt-0.5 mb-1">
            {MainMenu.map((menu, index) => (
                <NavLink to={menu.path} key={index} className="py-1 block group">
                    {({ isActive }) => (
                        <div className={classNames(" inline-flex p-3 rounded-full pr-4 items-center relative  gap-5 text-xl  group-hover:bg-white/10", {
                            "font-bold": isActive
                        })}>
                            <div className="w-[26.25px] h-[26.25px] relative">
                                {menu?.notification && (
                                    <span className="h-[18px] w-[18px] rounded-full absolute -top-1.5 text-[11px] bg-blue-400 -right-1 flex items-center justify-center">{menu.notification}</span>
                                )}
                                {!isActive && menu.icon.passive}
                                {isActive && menu.icon.active}
                            </div>
                            {menu.title}
                        </div>
                    )}
                </NavLink>

            ))}
            <More />
            <New />

        </div>
    )
}