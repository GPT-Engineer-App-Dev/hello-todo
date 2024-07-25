import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Todo App</h1>
        <p className="text-xl mb-8">Stay organized and boost your productivity!</p>
        <Button asChild>
          <Link to="/todo">Go to Todo List</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
