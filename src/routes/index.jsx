import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Bildirimler from "~/pages/bildirimler";
import Anasayfa from "~/pages/home";
import Kesfet from "~/pages/kesfet";
import NotFound from "~/pages/not-found";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {   
                index:true,
                elenment: <Anasayfa/>
            },
            {
                path: "/kesfet",
                element: <Kesfet />
            },
            {
                path: "/bildirimler",
                element: <Bildirimler/>    
             },
            {
                path: "*",
                element: <NotFound/>    
             }
        ]
    },
])