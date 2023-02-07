import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../store/store';
import { CharactersLocationI, CharacterStateI, InitialStateI } from '../../models/character';
import { characterArr, getCharacter, getCharactersLocation } from '../../services/characters';

export const getCharactersUrls = createAsyncThunk(
  //action type string
  "character/getCharactersLocations",
  // callback function
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as InitialStateI;
      const data = await getCharactersLocation();
      let urlCharacters: string[] = []

      data.results.map((e:CharactersLocationI)=> {
        e.residents.map(async (x: string) => {
          urlCharacters.push(x)
          const dataAll = await getCharacter(x)
          thunkAPI.dispatch(handleChangeCharacteres(dataAll.chart))
        })
      })
      return urlCharacters;
    } catch (err:any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState: InitialStateI  =  {
  isLoading: false,
  characters: [],
  urls: [],
  textAlert: "",
}

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    handleChangeCharacteres: (state: InitialStateI, action: PayloadAction<any>) => {
      state.characters.push(action.payload)
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(getCharactersUrls.pending, (state) => {
      state.isLoading = true;
    }),
    builder.addCase(getCharactersUrls.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      //@ts-ignore
      state.urls = payload;
    }),
    builder.addCase(getCharactersUrls.rejected, (state) => {
      state.isLoading = false;
      console.log('hola')
    })
  },
})
export const {
  handleChangeCharacteres,
} = characterSlice.actions;

export const urls = (state: RootState) => state.characters.urls;
export const characters = (state: RootState) => state.characters.characters;
