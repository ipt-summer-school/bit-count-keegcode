interface Actions {
    [key: string]: number
}

class Diagram {
    actions: Actions;
    constructor(actions: Actions) {
        this.actions = actions
    }
    
    private char = ''

    private fillChar = (): void => {
        const actions: Actions = JSON.parse(JSON.stringify(this.actions));
        Object.keys(actions).map(key => {
            for(let i = 1; i <= actions[key]; ++i) {
                this.char += '|'
            }
            this.char += actions[key] < 1 ? `` :  ` ${key} ${actions[key]} ${actions[key] === 1 ? 'hour' : 'hours'}\n`
        })
    }

    public draw = (): void => {
        this.fillChar();
        console.log(this.char)
    }
}

new Diagram({
    "Sleep": 8.30,
    "Getting up from the bed": 0.15,
    "Shower": 1,
    "Meal": 0.20,
    "Travel to KPI": 2,
    "Study": 7,
    "Ride home": 2
}).draw()