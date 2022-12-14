import { useAppSelector } from "./reduxHooks";

function useSubcatRender(categoriesName:string|undefined){

    const arrFlour: any[] = []
    const arrPasta: any[] = []
    const arrBeans: any[] = []
    const arrOil: any[] = []
    const arrSpices: any[] = []
    const arrPorridge: any[] = []
    const arrSouces: any[] = []
    const arrWater: any[] = []
    const arrKvas: any[] = []
    const arrJuice: any[] = []
    const arrEnergetics: any[] = []
    const arrSoda: any[] = []
    const arrTea: any[] = []
    const arrCoffee: any[] = []
    const arrFishcold: any[] = []
    const arrFishdone: any[] = []
    const arrFishfresh: any[] = []
    const arrIkra: any[] = []
    const arrPork: any[] = []
    const arrChicken: any[] = []
    const arrBeef: any[] = []
    const arrSemifinished: any[] = []
    const arrSausages: any[] = []
    const arrBreads: any[] = []
    const arrPastry: any[] = []
    const arrCrackers: any[] = []
    const arrVeg: any[] = []
    const arrFrut: any[] = []
    const arrMushrooms: any[] = []
    const arrBerries: any[] = []
    const arrGreens: any[] = []
    const arrEggs: any[] = []
    const arrCheese: any[] = []
    const arrMilks: any[] = []
    const arrButter: any[] = []
    const arrSourcream: any[] = []
    const arrDeserts: any[] = []
    const arrKefir: any[] = []
    const arrCottage: any[] = []
    const arrIcecream: any[] = []
    const arrChips: any[] = []

    const productItems = useAppSelector((store)=>store.prod.prodItems)

    productItems&&productItems.map((e:any)=>{
        if(e.link=='flour'){
            return arrFlour.push(e)
        }
        else if(e.link=='pasta'){
            return arrPasta.push(e)
        }
        else if(e.link=='beans'){
            return arrBeans.push(e)
        }
        else if(e.link=='oil'){
            return arrOil.push(e)
        }
        else if(e.link=='spices'){
            return arrSpices.push(e)
        }
        else if(e.link=='souces'){
            return arrSouces.push(e)
        }
        else if(e.link=='chips'){
            return arrChips.push(e)
        }
        else if(e.link=='porridge'){
            return arrPorridge.push(e)
        }
        else if(e.link=='water'){
            return arrWater.push(e)
        }
        else if(e.link=='kvas'){
            return arrKvas.push(e)
        }
        else if(e.link=='juice'){
            return arrJuice.push(e)
        }
        else if(e.link=='energetics'){
            return arrEnergetics.push(e)
        }
        else if(e.link=='soda'){
            return arrSoda.push(e)
        }
        else if(e.link=='tea'){
            return arrTea.push(e)
        }
        else if(e.link=='coffee'){
            return arrCoffee.push(e)
        }
        else if(e.link=='fishcold'){
            return arrFishcold.push(e)
        }
        else if(e.link=='fishdone'){
            return arrFishdone.push(e)
        }
        else if(e.link=='fishfresh'){
            return arrFishfresh.push(e)
        }
        else if(e.link=='ikra'){
            return arrIkra.push(e)
        }
        else if(e.link=='pork' ){
            return arrPork.push(e)
        }
        else if(e.link=='chicken'){
            return arrChicken.push(e)
        }
        else if(e.link=='beef'){
            return arrBeef.push(e)
        }
        else if(e.link=='semifinished'){
            return arrSemifinished.push(e)
        }
        else if(e.link=='sausages'){
            return arrSausages.push(e)
        }
        else if(e.link=='breads'){
            return arrBreads.push(e)
        }
        else if(e.link=='pastry'){
            return arrPastry.push(e)
        }
        else if(e.link=='crackers'){
            return arrCrackers.push(e)
        }
        else if(e.link=='veg'){
            return arrVeg.push(e)
        }
        else if(e.link=='fruts'){
            return arrFrut.push(e)
        }
        else if(e.link=='mushrooms'){
            return arrMushrooms.push(e)
        }
        else if(e.link=='berries'){
            return arrBerries.push(e)
        }
        else if(e.link=='greens'){
            return arrGreens.push(e)
        }
        else if(e.link=='eggs'){
            return arrEggs.push(e)
        }
        else if(e.link=='cheese'){
            return arrCheese.push(e)
        }
        else if(e.link=='milks'){
            return arrMilks.push(e)
        }
        else if(e.link=='butter'){
            return arrButter.push(e)
        }
        else if(e.link=='sourcream'){
            return arrSourcream.push(e)
        }
        else if(e.link=='deserts'){
            return arrDeserts.push(e)
        }
        else if(e.link=='kefir'){
            return arrKefir.push(e)
        }
        else if(e.link=='cottage'){
            return arrCottage.push(e)
        }
        else if(e.link=='icecream'){
            return arrIcecream.push(e)
        }
    })


    switch(categoriesName){
        case "flour":
            return arrFlour
        case 'pasta':
            return arrPasta
        case 'beans':
            return arrBeans
        case 'oil':
            return arrOil
        case 'spices':
            return arrSpices
        case 'porridge':
            return arrPorridge
        case 'souces':
            return arrSouces
        case 'chips':
            return arrChips
        case 'water':
            return arrWater
        case "kvas":
            return arrKvas
        case 'juice':
            return arrJuice
        case 'energetics':
            return arrEnergetics
        case 'soda':
            return arrSoda
        case 'tea':
            return arrTea
        case 'coffee':
            return arrCoffee
        case 'fishcold':
            return arrFishcold
        case "fishdone":
            return arrFishdone
        case 'fishfresh':
            return arrFishfresh
        case 'ikra':
            return arrIkra
        case 'pork':
            return arrPork
        case 'chicken':
            return arrChicken
        case 'beef':
            return arrBeef
        case 'semifinished':
            return arrSemifinished
        case 'sausages':
            return arrSausages
        case 'breads':
            return arrBreads
        case "pastry":
            return arrPastry
        case 'crackers':
            return arrCrackers
        case 'veg':
            return arrVeg
        case 'fruts':
            return arrFrut
        case 'mushrooms':
            return arrMushrooms
        case 'berries':
            return arrBerries
        case 'greens':
            return arrGreens
        case 'eggs':
            return arrEggs
        case 'cheese':
            return arrCheese
        case 'milks':
            return arrMilks
        case 'butter':
            return arrButter
        case 'sourcream':
            return arrSourcream
        case "deserts":
            return arrDeserts
        case 'kefir':
            return arrKefir
        case 'cottage':
            return arrCottage
        case 'icecream':
            return arrIcecream

        default:
            return 'not found'
    }
}

export default useSubcatRender