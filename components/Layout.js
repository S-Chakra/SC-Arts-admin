import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";


export default function Layout({children}) {
  const { data: session } = useSession();
  if(!session){
    return (
      <div className= "bg-obsidian w-screen h-screen flex items-center">
        <div className="text-center w-full">
        <button onClick={() => signIn('google')} className="bg-persimmon text-white font-bold p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
    );
  }
  return(
    <div className="bg-obsidian min-h-screen text-white text-lg font-bold flex">
      <Nav />
    <div className="bg-alabaster w-screen text-obsidian text-base mr-2 mt-2 mb-2 rounded-lg p-4">{children}</div> 
    </div>
  );
  }
