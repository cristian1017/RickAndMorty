export interface InitialStateI {
  characters: {}[];
  urls: [];
  textAlert: string;
  isLoading: boolean;
}

export interface CharactersLocationI {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
  created: string;
}

export interface CharacterStateI {
  id: number,
  name: string;
  status: string;
  gender: string;
  species: string;
  image: string;
}


