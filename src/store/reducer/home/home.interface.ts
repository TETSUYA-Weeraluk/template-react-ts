export interface HomeState {
  pokemon: Pokemon[];
  pokemonById: PokemonDetail;
  welcomeText: string;
  loading?: StateLoading;
  error?: string;
}

export enum StateLoading {
  IDLE = "idle",
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export interface Pokemon {
  name: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export interface Pagination {
  limit: number;
  page: number;
}

export interface PokemonDetail {
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}
