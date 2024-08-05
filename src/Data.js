export const API_KEY = 'AIzaSyCYP6smDMSZHDWFFayohlOejwU8rMiZgcg'

export function convert(value){
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }else if(value>=1000){
        return Math.floor(value/1000)="K"
    }else{
        return value;
    }
}