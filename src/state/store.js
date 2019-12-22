import { createStore } from "redux";
import blog from "./reducers";
import initialState from "./initial";

export const store = createStore(blog, initialState);
