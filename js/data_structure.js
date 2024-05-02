class MyArray{
    constructor(){
        this.length = 0; 
        this.data = {};
    }
get(index){ // un número que estoy solicitando
    return this.data[index];
}
push(item){ // lo que estoy buscando
    this.data[this.length] = item;
    this.length++;
    return this.data;
}
pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];this.length--;return lastItem;}

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

shiftIndex(index){
    for(let i = index; i < this.length - 1 ; i ++){
        this.data[i]=this.data[i+1];
    }
delete this.data[this.length-1];this.length--;}

unshift(item){
    
    for (let i = this.length; i > 0; i--) {
    this.data[i - 1] = this.data[i];
    }
    this.data[0] = item;
    return item
}
}
const myArray=new MyArray();