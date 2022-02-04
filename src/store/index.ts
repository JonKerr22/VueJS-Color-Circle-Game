import { createStore } from "vuex";
import Counter from "./counter";

const store = createStore({});

new Counter({ store, name: "counter" });

export default store