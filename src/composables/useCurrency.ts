export default () => {
  const setCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      // notation: "compact",
      signDisplay: "auto",
      // maximumFractionDigits: 3,
      // roundingIncrement: 5,
    }).format(value);
  return { setCurrency };
};
