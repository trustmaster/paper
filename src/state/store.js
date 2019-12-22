import { createStore } from "redux";
import blog, { initialState } from "./reducers";

export const store = createStore(blog, initialState);
