export interface Cep {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const ceps = [
  { id: 1,
    cep: "17340170",
    logradouro: "Rua Emílio Bressan",
    complemento: "",
    bairro: "Vila Operária",
    localidade: "Barra Bonita",
    uf: "SP"
  },
  {
    id: 2,
    cep: "91150000",
    logradouro: "Rua João Alfredo",
    complemento: "Apto 301",
    bairro: "Cidade Baixa",
    localidade: "Porto Alegre",
    uf: "RS"
  },
  {
    id: 3,
    cep: "19345174",
    logradouro: "Rua das Acácias",
    complemento: "Sobrado",
    bairro: "Vila Habitacional",
    localidade: "Avare",
    uf: "SP"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/