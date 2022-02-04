import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module({ generateMutationSetters: true })
export default class Counter extends VuexModule {
    //state
    private _count = 15;

    //getters
    public get count(): number {
        return this._count;
    }

    //mutations
    @Mutation
    private incrementCount(): void {
        this._count++;
    }
    @Mutation
    private decrementCount(): void {
        if (this._count > 0) {
            this._count--;
        }
    }

    //actions
    @Action
    public async increment(): Promise<void> {
        this.incrementCount();
    }
    @Action
    public async decrement(): Promise<void> {
        this.decrementCount();
    }
}