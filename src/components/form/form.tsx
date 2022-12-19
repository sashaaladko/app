import './form-styles.scss'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../hooks/reduxHooks';
import HeaderComponent from '../UI/header/headerComponent';
import { useRecoilValue } from 'recoil';
import { shopAtom } from '../../recoil/form';


interface IFormInputs{
    firstName: string;
    lastName: string;
    number: string;
    town: string
    streetname: string
    housenumber: string
    payment_id: string
    comment: string,

}
 
function FormContainer(){
    const cartItems = useAppSelector((store)=>store.cart.cartItems)
    const [postdata, setPostdata] = useState<any>()
    const shop_id = useRecoilValue(shopAtom)
    const cart_amount = cartItems.length
    const [postResult, setPostResult] = useState(null);
    const {handleSubmit, register, formState:{errors}} = useForm<IFormInputs>({
        defaultValues:{
            firstName:'',
            lastName:'',
            number: '',
            town: '',
            streetname: '',
            housenumber: '',
            payment_id: '',
            comment: '',
        }
    })

    const fortmatResponse = (res:any) => {
        return JSON.stringify(res, null, 2);
    }
      
      async function postData() {
        try {
          const res = await fetch('http://localhost:8080/zhmot-app/delivery', {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": "token-value",
            },
            body: JSON.stringify(postdata),
          });
    
          if (!res.ok) {
            const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
          }

          const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
//@ts-ignore
      setPostResult(fortmatResponse(result));
    } catch (err:any) {
      setPostResult(err.message);
    }
  }


  const onSubmit = (data:IFormInputs) =>{
    setPostdata({...data, cartItems, shop_id, cart_amount})
    console.log(postdata);
    postData()
  }


    return(
        <>
        <HeaderComponent/>
        <h1>Заполните форму</h1>
        <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form">
                <label className="inputName">Имя:</label>
                <input {...register('firstName', {required:true})} placeholder='введите имя'/>
                <div className='formError'>
                    {errors?.firstName&&<p>поле обязательно для заполнения</p>}
                </div>
                <label className="inputName">Фамилия:</label>
                <input {...register('lastName',{required:true} )} placeholder='введите фамилию'/>
                <div className='formError'>
                    {errors?.lastName&&<p>поле обязательно для заполнения</p>}
                </div>
                <label className="inputName">Номер телефона:</label>
                <input {...register('number', {pattern: /^[((+375)|(80))+((29)|(25)|(44))+(\d{7})]/})} type='tel' placeholder="введите номер телефона"/>
                <div className='formError'>
                    {errors?.number&&<p>поле обязательно для заполнения</p>}
                </div>
                <label className="inputName">Адрес:</label>
                <label className="inputName">Город:</label>
                <input {...register('town',{required:true} )} placeholder='введите город'/>
                <div className='formError'>
                    {errors?.town&&<p>поле обязательно для заполнения</p>}
                </div>
                <label className="inputName">Улица:</label>
                <input {...register('streetname',{required:true} )} placeholder='введите улицу'/>
                <div className='formError'>
                    {errors?.streetname&&<p>поле обязательно для заполнения</p>}
                </div>
                <label className="inputName">Дом:</label>
                <input {...register('housenumber',{required:true} )} placeholder='введите номер дома и квартиры'/>
                <div className='formError'>
                    {errors?.housenumber&&<p>поле обязательно для заполнения</p>}
                </div>
                <label className="inputName">Выьерите способ оплаты:</label>
                <input type="radio" {...register('payment_id',{required:true} )} id="2" value="2" name="payment_id"/><label>наличные</label>
                <input type="radio" {...register('payment_id',{required:true} )} id="1" value="1" name="payment_id"/><label>карта</label>
                <div className='formError'>
                    {errors?.payment_id&&<p>поле обязательно для заполнения</p>}
                </div>
                <label className="inputName">Вы можете оставить комментарий:</label>
                <input {...register('comment')} placeholder='введите комментарий'/>
                <input type='submit' value="Подтвердить"/>
                </div>
            </form>
            <div>
            </div>
        </div>
        </>
    )
}

export default FormContainer