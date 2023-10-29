import { NOT_EKLE, NOT_EKLE_API, NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}

function myReducers(state = baslangicDegerleri, action) {
  switch (action.type) {
    case NOT_EKLE:
      const addNote = { ...state, notlar: [action.payload, ...state.notlar] };
      return addNote;
    case NOT_SIL:
      const stateAfterRemove = {
        ...state,
        notlar: state.notlar.filter((not) => not.id !== action.payload),
      };
      return stateAfterRemove;
    default:
      return state;
  }
}

export default myReducers;
