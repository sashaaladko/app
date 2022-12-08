import React from "react";
import veg from '../../jsons/veg.json'
import milks from '../../jsons/milks.json'
import breads from '../../jsons/bread.json'
import drinks from '../../jsons/drinks.json'
import meats from '../../jsons/meat.json'
import fishes from '../../jsons/fish.json'
import baks from '../../jsons/bak.json'

function useCategories(categoriesName:string|undefined){
    // const chosenCategories = 
    // { vegetables: [
    //         {link: 'vegetables'},
    //         {name: 'морковь', price: 10},
    //         {name: 'помидор', price: 120},
    //         {name: 'огурец', price: 40},
    //         {name: 'свекла', price: 16},
    //         {name: 'лимон', price: 13},
    //         {name: 'апельсин', price: 8},
    //     ],
    //     milk: [
    //         {link: 'milk'},
    //         {name: 'творог', price: 10},
    //         {name: 'сметана', price: 120},
    //         {name: 'йогурт', price: 40},
    //         {name: 'молоко', price: 16},
    //         {name: 'кефир', price: 13},
    //         {name: 'сыр', price: 8},
    //     ],
    //     water: [
    //         {link: 'water'},
    //         {name: 'вода', price: 10},
    //         {name: 'кола', price: 120},
    //         {name: 'пепси', price: 40},
    //         {name: 'спрайт', price: 16},
    //         {name: 'фанта', price: 13},
    //         {name: 'сок', price: 8},
    //     ],
    // }

    const vegetables = veg 
    const milk = milks
    const drink = drinks
    const meat = meats
    const fish = fishes
    const bak = baks
    const bread = breads


    switch(categoriesName){
        case "milk":
            return milk
        case "water":
            return drink
        case "vegetables":
            return vegetables
        case "bak":
            return bak
        case "bread":
            return bread
        case "meat":
            return meat
        case "fish":
            return fish
        default:
            return 'not found'
    }
}

export default useCategories