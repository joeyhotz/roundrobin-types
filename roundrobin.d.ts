declare module "roundrobin" {
  function defaultFunction(numberOfPlayers: number): number[][];
  function defaultFunction(
    numberOfPlayers: number,
    playerNames: string[]
  ): string[][];

  export default defaultFunction;
}

