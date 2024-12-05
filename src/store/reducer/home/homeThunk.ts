import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pagination, Pokemon, PokemonDetail } from "./home.interface";
import HomeService from "../../../services/home/home.service";

export const fetchPokemon = createAsyncThunk<Pokemon[], Pagination>(
  "home/fetchPokemon",
  async (params: Pagination) => {
    return await HomeService.fetchPokemon(params);
  }
);

export const fetchPokemonById = createAsyncThunk<PokemonDetail, string>(
  "home/fetchPokemonById",
  async (id: string) => {
    return await HomeService.fetchPokemonById(id);
  }
);
