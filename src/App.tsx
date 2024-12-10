import { Logo } from "./components/Logo.tsx";
import { Main } from "./components/Main.tsx";

export function App() {
  return (
    <div className="grid  grid-cols-2 h-screen bg-slate-50">
      <div className="py-10 px-28">
        <Logo />
        <Main />
      </div>
      <div className="bg-img-purple bg-cover bg-no-repeat" />
    </div>
  );
}
