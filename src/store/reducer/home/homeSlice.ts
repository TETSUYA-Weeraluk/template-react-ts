import { fetchPokemon, fetchPokemonById } from "./homeThunk";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState, StateLoading } from "./home.interface";

const initialState: HomeState = {
  pokemon: [],
  pokemonById: {
    stats: [],
    types: [],
  },
  welcomeText: "",
  loading: StateLoading.PENDING,
  error: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    welcomeToHomePage: (state, action: PayloadAction<string>) => {
      state.welcomeText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state, action) => {
      state.loading = action.payload;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload;
      state.loading = StateLoading.PENDING;
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.loading = StateLoading.FAILED;
      state.error = action.error.message || "";
    });
    builder.addCase(fetchPokemonById.pending, (state, action) => {
      state.loading = action.payload;
    });
    builder.addCase(fetchPokemonById.fulfilled, (state, action) => {
      state.pokemonById = action.payload;
      state.loading = StateLoading.PENDING;
    });
    builder.addCase(fetchPokemonById.rejected, (state, action) => {
      state.loading = StateLoading.FAILED;
      state.error = action.error.message || "";
    });
  },
});

export const { welcomeToHomePage } = homeSlice.actions;
export default homeSlice.reducer;
