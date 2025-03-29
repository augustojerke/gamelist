import { ModeToggle } from "@/components/common/dark-mode-toggle";
import GamelistTitle from "@/components/common/gamelist-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <header className="text-center mb-12">
        <GamelistTitle className="text-6xl" />
        <p className="mt-4">A place to control your gaming</p>
        <Link href="/login">
          <Button className="mt-5 mr-3 w-28 font-bold">Login</Button>
        </Link>
        <Link href="/signup">
          <Button className="mt-5 w-28 font-bold">Sign up</Button>
        </Link>
      </header>
      {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Rápido</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Desempenho otimizado para uma experiência incrível.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Seguro</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Segurança reforçada para proteger seus dados.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fácil de Usar</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Interface intuitiva e simples para todos os usuários.</p>
          </CardContent>
        </Card>
      </section> */}
    </div>
  );
}
