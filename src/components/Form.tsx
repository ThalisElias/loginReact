import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Eye, EyeSlash } from "@phosphor-icons/react";

type PasswordType = "password" | "text";

const loginFormValidationSchema = zod.object({
  email: zod.string().email("Digite um e-mail válido."),
  password: zod.string().nonempty("Digite a sua senha."),
});

type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>;

export function Form() {
  const [inputPasswordType, setInputPasswordType] =
    useState<PasswordType>("password");

  const hadleTogglePasswordType = (type: PasswordType) => {
    switch (type) {
      case "password":
        setInputPasswordType("text");
        return;
      case "text":
      default:
        setInputPasswordType("password");
        return;
    }
  };

  const loginForm = useForm<NewLoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
  });

  const { register, handleSubmit, formState, reset } = loginForm;

  const { errors } = formState;

  const handleLoginSubmit = (data: NewLoginFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-sans font-semibold text-sm text-slate-800"
        >
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Digite seu e-mail."
          className="px-4 py-3 bg-white text-sm text-slate-800 leading-5 border border-slate-200 rounded outline-none focus:border-violet-600"
        />
        {errors.email && (
          <span className="text-red text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="password"
          className="font-sans font-semibold text-sm text-slate-800 flex justify-between"
        >
          Senha:
          <a
            className="text-violet-400 hover:text-purple-600 hover:underline"
            href=""
          >
            Esqueceu sua senha?
          </a>
        </label>
        <input
          type={inputPasswordType}
          id="password"
          {...register("password")}
          placeholder="Digite sua senha."
          className="px-4 py-3 bg-white text-sm text-slate-800 leading-5 border border-slate-200 rounded outline-none focus:border-violet-600"
        />
        {errors.password && (
          <span className="text-red text-sm">{errors.password.message}</span>
        )}
        <button
          type="button"
          aria-label="Alternar visibilidade da senha"
          onClick={() => hadleTogglePasswordType(inputPasswordType)}
          className="absolute right-4 top-11 text-slate-400"
        >
          {inputPasswordType === "password" ? <EyeSlash /> : <Eye />}
        </button>
      </div>
      <footer className="flex flex-col gap-8">
        <button className="w-full bg-purple-400 py-4 text-white font-bold hover:bg-violet-600 outline-none rounded hover:ring-1 hover:ring-violet-600 focus:ring-2 focus:ring-purple-400">
          Entrar
        </button>
        <span className="text-slate-600">
          Ainda não tem uma conta?{" "}
          <a
            href=""
            className="text-violet-400 hover:text-purple-600 hover:underline"
          >
            Inscreva-se.
          </a>
        </span>
      </footer>
    </form>
  );
}
