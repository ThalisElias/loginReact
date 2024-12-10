import { Form } from "./Form";

export function Main() {
  return (
    <main className="flex flex-col gap-10 w-full max-w-[384px] mt-20">
      <header className="flex flex-col gap-4 w-full max-w-[350px]">
        <h1 className="font-sans text-4xl font-bold text-slate-800">
          Acesse a plataforma
        </h1>
        <p className="font-sans font-normal text-base text-slate-600">
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </p>
      </header>
      <Form />
    </main>
  );
}
