import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module({ generateMutationSetters: true })
export default class Counter extends VuexModule {
    //state
    private _timerCount = 15;
    private _scoreCount = 0;

    //getters
    public get time(): number {
        return this._timerCount;
    }
    public get score(): number {
        return this._scoreCount;
    }

    //mutations
    @Mutation
    private resetTimerCount(): void {
        this._timerCount = 15;
    }
    @Mutation
    private decrementTimerCount(): void {
        if (this._timerCount > 0) {
            this._timerCount--;
        }
    }
    @Mutation
    private incrementScoreCount(): void {
        this._scoreCount++;
    }
    @Mutation 
    private resetScoreCount(): void {
        this._scoreCount = 0;
    }

    //actions
    @Action
    public async timerReset(): Promise<void> {
        this.resetTimerCount();
    }
    @Action
    public async timerCountDown(): Promise<void> {
        this.decrementTimerCount();
    }
    @Action 
    public async scoreReset(): Promise<void> {
        this.resetScoreCount();
    }
    @Action
    public async increaseScore(): Promise<void> {
        this.incrementScoreCount();
    }
}