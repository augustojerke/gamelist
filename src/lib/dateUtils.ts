export function formateDateUnixToYear(timestamp: number) {
    const data = new Date(timestamp * 1000);
    return data.getFullYear();
}

export function formateDateUnix(timestamp: number) {
  const data = new Date(timestamp * 1000);
  const dia = String(data.getDate()).padStart(2, '0'); 
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}