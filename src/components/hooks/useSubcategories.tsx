import React from "react";
import NotFound from "../pages/notFound/notFound";

function useSubCategories(subCategoriesName:string|undefined){

    const categories = [
        {title: "Молочные продукты, яйца", link: "milk", list: [
          {title: "яйца", link: "eggs"},
          {title: "Сыр", link: "cheese"},
          {title: "Молоко", link: "milks"},
          {title: "Масло, маргарин", link: "butter"},
          {title: "Сметана, сливки", link: "sourcream"},
          {title: "Йогурт, десерты", link: "deserts"},
          {title: "Кефир, кисломолочные изделия", link: "kefir"},
          {title: "Творожные продукты", link: "cottage"},
          {title: "Мороженое", link: "icecream"},
        ]},
        {title: "Овощи и фрукты", link: "vegetables",  list: [
          {title: "Овощи", link: "veg"},
          {title: "Фрукты", link: "fruts"},
          {title: "Грибы", link: "mushrooms"},
          {title: "Ягоды", link: "berries"},
          {title: "Зелень, салаты", link: "greens"},
        ]},
        {title: "Хлеб, кондитерские изделия", link: "bread",  list: [
          {title: "Хлеб, сдоба", link: "breads"},
          {title: "Кондитерские изделия", link: "pastry"},
          {title: "Сушки, сухари", link: "crackers"},
        ]},
        {title: "Мясо, колбасные изделия", link: "meat",  list: [
          {title: "Свинина", link: "pork"},
          {title: "Птица", link: "chicken"},
          {title: "Говядина", link: "beef"},
          {title: "Полуфабрикаты", link: "prod"},
          {title: "Колбасы, сосиски", link: "sosages"},
        ]},
        {title: "Рыба, морепродукты ", link: "fish",  list: [
          {title: "Рыба охлажденная", link: "fishcold"},
          {title: "Рыба и морепродукты готовые", link: "fishdone"},
          {title: "Рыба свежемороженая", link: "fishfresh"},
          {title: "Капуста морская, чука", link: "chuka"},
          {title: "Икра", link: "ikra"},
        ]},
        {title: "Вода, напитки", link: "water", list: [
          {title: "Вода", link: "waters"},
          {title: "Квас", link: "kvas"},
          {title: "Соки", link: "juice"},
          {title: "Энергетические напитки", link: "energetics"},
          {title: "Напитки", link: "soda"},
          {title: "Чай", link: "tea"},
          {title: "Кофе", link: "coffee"},
        ]},
        {title: "Бакалея", link: "bak",  list: [
          {title: "Мука, мучные смеси", link: "flour"},
          {title: "Макаронные изделия", link: "pasta"},
          {title: "Крупа и бобовые", link: "groats"},
          {title: "Масло растительное, уксус", link: "oil"},
          {title: "Соль, сахар, специи", link: "spices"},
          {title: "Хлопья, каши, мюсли", link: "porridge"},
          {title: "Соусы", link: "souces"},
          {title: "Орехи, сухофрукты, семечки", link: "nuts"},
          {title: "Чипсы, сухарики", link: "chips"},
          {title: "Консервы", link: "canned"},
        ]},
    ]

    // const a = categories.map((e)=>{
    //     if(subCategoriesName==e.link){
    //         return e.list
    //     }
    // })

   return categories.find((e:any)=>subCategoriesName==e.link)

}

export default useSubCategories