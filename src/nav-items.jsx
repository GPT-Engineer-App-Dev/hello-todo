import { Home, ListTodo, Info } from "lucide-react";
import Index from "./pages/Index.jsx";
import Todo from "./pages/Todo.jsx";
import About from "./pages/About.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Todo",
    to: "/todo",
    icon: <ListTodo className="h-4 w-4" />,
    page: <Todo />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
];
