import axios from "axios";
import {
  Pagination,
  Pokemon,
  PokemonDetail,
  PokemonResponse,
} from "../../store/reducer/home/home.interface";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

class HomeService {
  static async fetchPokemon({ limit, page }: Pagination): Promise<Pokemon[]> {
    const response = await axios.get<PokemonResponse>(BASE_URL, {
      params: {
        limit,
        offset: page * limit,
      },
    });
    return response.data.results;
  }

  static async fetchPokemonById(id: string): Promise<PokemonDetail> {
    const response = await axios.get<PokemonDetail>(`${BASE_URL}/${id}`);
    return response.data;
  }
}

export default HomeService;
