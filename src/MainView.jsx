import { useEffect } from "react";
import List from "./list";

function MainView() {

    

    useEffect(()=>{
        console.log("UseEffect called");
    }, []);

  return (
    <div className="flex flex-col items-center h-screen m-2">
      <h1>Main Page</h1>
      <div className="flex flex-row"><List /><List /></div>
      <div>
        <button className="m-2 px-2 py-1 border border-black rounded-sm">
          Create
        </button>
        <button className="m-2 px-2 py-1 border border-black rounded-sm">
          Update
        </button>
      </div>
    </div>
  );
}

export default MainView;
