export default class Categories {
    
    constructor(){
        this.categories = [];
        this._subscribers = [];
    }

    addCategory(newCategory){
        console.log(this.categories);
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

    unsubscribe(){
        
    }
}