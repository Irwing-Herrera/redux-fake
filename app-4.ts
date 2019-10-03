import { Store, createStore } from "redux";
import { contadorReducer } from "./contador/contador.reducer";
import { incrementadorAction } from "./contador/contador.actions";

const store: Store = createStore(contadorReducer);

store.subscribe(() => {
    console.log('Subscribe', store.getState());
});

store.dispatch(incrementadorAction);