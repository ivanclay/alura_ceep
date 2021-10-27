export default class Categories {
    
    constructor(){
        this.categories = [];
        this._subscribers = [];
    }

    addCategory(newCategory){
        this.notifySubscribers();
        this.categories.push(newCategory);
    }

    notifySubscribers(){
        this._subscribers.forEach(f => {
            f(this.categories);
        });
    }

    subscribe(f){
        this._subscribers.push(f);
    }

    unsubscribe(f){
        this._subscribers.filter(x => x !== f);
    }
}