import { useAppSelector } from "./reduxHooks";

function useCategories(categoriesName:string|undefined){

    const arrBak: any[] = []
    const arrDrinks: any[] = []
    const arrFish: any[] = []
    const arrMeat: any[] = []
    const arrBread: any[] = []
    const arrVeg: any[] = []
    const arrMilk: any[] = []

    const productItems = useAppSelector((store)=>store.prod.prodItems)

    productItems&&productItems.map((e:any)=>{
        if(e.link=='flour' || e.link=='pasta' || e.link=='beans' || e.link=='oil' || e.link=='spices' || e.link == 'porridge'){
            return arrBak.push(e)
        }
        else if(e.link=='water' || e.link=='kvas' || e.link=='juice' || e.link=='energetics' || e.link=='soda' || e.link == 'tea' || e.link == 'coffee'){
            return arrDrinks.push(e)
        }
        else if(e.link=='fishcold' || e.link=='fishdone' || e.link=='fishfresh' || e.link=='ikra'){
            return arrFish.push(e)
        }
        else if(e.link=='pork' || e.link=='chicken' || e.link=='beef' || e.link=='semifinished' || e.link=='sausages' ){
            return arrMeat.push(e)
        }
        else if(e.link=='breads' || e.link=='pastry' || e.link=='crackers'){
            return arrBread.push(e)
        }
        else if(e.link=='veg' || e.link=='fruts' || e.link=='mushrooms' || e.link=='berries' || e.link=='greens'){
            return arrVeg.push(e)
        }
        else if(e.link=='eggs' || e.link=='cheese' || e.link=='milks' || e.link=='butter' || e.link=='sourcream' || e.link == 'deserts' || e.link == 'kefir' || e.link == 'cottage' || e.link=='icecream'){
            return arrMilk.push(e)
        }
    })


    switch(categoriesName){
        case "bak":
            return arrBak
        case 'milk':
            return arrMilk
        case 'vegetables':
            return arrVeg
        case 'bread':
            return arrBread
        case 'meat':
            return arrMeat
        case 'fish':
            return arrFish
        case 'drinks':
            return arrDrinks
        default:
            return 'not found'
    }
}

export default useCategories