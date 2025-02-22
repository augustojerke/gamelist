"use client";
import { ModeToggle } from "@/components/common/dark-mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Bem-vindo à Nossa Landing Page</h1>
        <p className="mt-2">Um lugar para destacar seu produto ou serviço.</p>
        <Button className="mt-4">Saiba Mais</Button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
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
      </section>
    </div>
  );
}
