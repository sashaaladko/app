import { useAppSelector } from "./reduxHooks";

function useCategories(categoriesName:string|undefined){

    const arr: any[] = []

    const productItems = useAppSelector((store)=>store.prod.prodItems)

    productItems&&productItems.map((e:any)=>{
        if(e.link=='flour' || e.link=='pasta' || e.link=='beans' || e.link=='oil' || e.link=='spices' || e.link == 'porridge'){
            return arr.push(e)
        }
        else if(e.link=='water' || e.link=='kvas' || e.link=='juice' || e.link=='energetics' || e.link=='soda' || e.link == 'tea' || e.link == 'coffee'){
            return arr.push(e)
        }
        else if(e.link=='fishcold' || e.link=='fishdone' || e.link=='fishfresh' || e.link=='ikra'){
            return arr.push(e)
        }
        else if(e.link=='pork' || e.link=='chicken' || e.link=='beef' || e.link=='semifinished' || e.link=='sausages' ){
            return arr.push(e)
        }
        else if(e.link=='breads' || e.link=='pastry' || e.link=='crackers'){
            return arr.push(e)
        }
        else if(e.link=='veg' || e.link=='fruts' || e.link=='mushrooms' || e.link=='berries' || e.link=='greens'){
            return arr.push(e)
        }
        else if(e.link=='eggs' || e.link=='cheese' || e.link=='milks' || e.link=='butter' || e.link=='sourcream' || e.link == 'deserts' || e.link == 'kefir' || e.link == 'cottage' || e.link=='icecream'){
            return arr.push(e)
        }
    })


    switch(categoriesName){
        case "bak":
            return arr
        case 'milk':
            return arr
        case 'vegetables':
            return arr
        case 'bread':
            return arr
        case 'meat':
            return arr
        case 'fish':
            return arr
        case 'drinks':
            return arr
        default:
            return 'not found'
    }
}

export default useCategories