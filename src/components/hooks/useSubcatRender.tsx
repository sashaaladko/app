import { useAppSelector } from "./reduxHooks";

function useSubcatRender(categoriesName:string|undefined){

    //const arrFlour: any[] = []
    // const arrPasta: any[] = []
    // const arrBeans: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []
    // const arrFlour: any[] = []

    const arr: any[] = [[]]

    const productItems = useAppSelector((store)=>store.prod.prodItems)

    productItems&&productItems.map((e:any)=>{
        if(e.link=='flour'){
            return arr[0].push(e)
        }
        else if(e.link=='pasta'){
            return arr[1].push(e)
        }
        else if(e.link=='beans'){
            return arr[2].push(e)
        }
        else if(e.link=='oil'){
            return arr[3].push(e)
        }
        else if(e.link=='spices'){
            return arr[4].push(e)
        }
        else if(e.link=='porridge'){
            return arr[5].push(e)
        }
        else if(e.link=='water'){
            return arr[6].push(e)
        }
        else if(e.link=='kvas'){
            return arr[7].push(e)
        }
        else if(e.link=='juice'){
            return arr[8].push(e)
        }
        else if(e.link=='energetics'){
            return arr[9].push(e)
        }
        else if(e.link=='soda'){
            return arr[10].push(e)
        }
        else if(e.link=='tea'){
            return arr[11].push(e)
        }
        else if(e.link=='coffee'){
            return arr[12].push(e)
        }
        else if(e.link=='fishcold'){
            return arr[13].push(e)
        }
        else if(e.link=='fishdone'){
            return arr[14].push(e)
        }
        else if(e.link=='fishfresh'){
            return arr[15].push(e)
        }
        else if(e.link=='ikra'){
            return arr[16].push(e)
        }
        else if(e.link=='pork' ){
            return arr[17].push(e)
        }
        else if(e.link=='chicken'){
            return arr[18].push(e)
        }
        else if(e.link=='beef'){
            return arr[19].push(e)
        }
        else if(e.link=='semifinished'){
            return arr[20].push(e)
        }
        else if(e.link=='sausages'){
            return arr[21].push(e)
        }
        else if(e.link=='breads'){
            return arr[22].push(e)
        }
        else if(e.link=='pastry'){
            return arr[23].push(e)
        }
        else if(e.link=='crackers'){
            return arr[24].push(e)
        }
        else if(e.link=='veg'){
            return arr[25].push(e)
        }
        else if(e.link=='fruts'){
            return arr[26].push(e)
        }
        else if(e.link=='mushrooms'){
            return arr[27].push(e)
        }
        else if(e.link=='berries'){
            return arr[28].push(e)
        }
        else if(e.link=='greens'){
            return arr[29].push(e)
        }
        else if(e.link=='eggs'){
            return arr[30].push(e)
        }
        else if(e.link=='cheese'){
            return arr[31].push(e)
        }
        else if(e.link=='milks'){
            return arr[32].push(e)
        }
        else if(e.link=='butter'){
            return arr[33].push(e)
        }
        else if(e.link=='sourcream'){
            return arr[34].push(e)
        }
        else if(e.link=='deserts'){
            return arr[35].push(e)
        }
        else if(e.link=='kefir'){
            return arr[36].push(e)
        }
        else if(e.link=='cottage'){
            return arr[37].push(e)
        }
        else if(e.link=='icecream'){
            return arr[38].push(e)
        }
    })


    switch(categoriesName){
        case "flour":
            return arr[0]
        case 'pasta':
            return arr[1]
        case 'beans':
            return arr[2]
        case 'oil':
            return arr[3]
        case 'spices':
            return arr[4]
        case 'porridge':
            return arr[5]
        case 'water':
            return arr[6]
        case "kvas":
            return arr[7]
        case 'juice':
            return arr[8]
        case 'energetics':
            return arr[9]
        case 'soda':
            return arr[10]
        case 'tea':
            return arr[11]
        case 'coffee':
            return arr[12]
        case 'fishcold':
            return arr[13]
        case "fishdone":
            return arr[14]
        case 'fishfresh':
            return arr[15]
        case 'ikra':
            return arr[16]
        case 'pork':
            return arr[17]
        case 'chicken':
            return arr[18]
        case 'beef':
            return arr[19]
        case 'semifinished':
            return arr[20]
        case 'sausages':
            return arr[21]
        case 'breads':
            return arr[22]
        case "pastry":
            return arr[23]
        case 'crackers':
            return arr[24]
        case 'veg':
            return arr[25]
        case 'fruts':
            return arr[26]
        case 'mushrooms':
            return arr[27]
        case 'berries':
            return arr[28]
        case 'greens':
            return arr[29]
        case 'eggs':
            return arr[30]
        case 'cheese':
            return arr[31]
        case 'milks':
            return arr[32]
        case 'butter':
            return arr[33]
        case 'sourcream':
            return arr[34]
        case "deserts":
            return arr[35]
        case 'kefir':
            return arr[36]
        case 'cottage':
            return arr[37]
        case 'icecream':
            return arr[38]

        default:
            return 'not found'
    }
}

export default useSubcatRender