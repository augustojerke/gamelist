import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="py-10 px-20 space-y-6">
      {/* Título */}
      <Skeleton className="h-8 w-[60%] rounded" />

      {/* Descrição */}
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="h-4 w-[80%] rounded" />

      {/* Linha divisória */}
      <div className="border-b border-border/40" />

      {/* Conteúdo inferior */}
      <div className="flex gap-6">
        {/* Imagem do jogo */}
        <Skeleton className="h-[300px] w-[220px] rounded-xl" />

        {/* Informações */}
        <div className="flex flex-col space-y-4 flex-1">
          <Skeleton className="h-4 w-[50%] rounded" />
          <Skeleton className="h-4 w-[70%] rounded" />
          <Skeleton className="h-4 w-[60%] rounded" />
        </div>
      </div>
    </div>
  );
}
