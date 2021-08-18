import {StarIcon} from '@heroicons/react/solid'
import  Currency from 'react-currency-formatter'
import Image from 'next/image'
import {useDispatch} from 'react-redux'
import {addToBasket, removeFromBasket} from "../slices/basketSlice"


function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime}) {

  const dispatch = useDispatch()

    const addItemtoBasket = ()=>{
        const product ={
            id, 
            title,
            price, 
            rating, 
            description, 
            category,
            image,
             hasPrime
        }
        // push item into redux
       dispatch(addToBasket(product))
    }

    const removeItemFromBasket = ()=>{
        // remove items from redux 
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit='contain'/>

            {/* middle */}
            <div className="col-span-3 mx-5">
             <p>{title}</p>
 <div className="flex">
{
    Array(rating)
    .fill()
    .map(
        (_, i)=>(
            <StarIcon key={i} className="h-5 text-yellow-500"/>
        )
    )
}
    
 </div>
             
 <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
 <Currency quantity={price} currency='USD'/>

 {
     hasPrime && (
         <div className="flex items-center space-x-2">
             <img loading='lazy' className="w-12" src="https://links.papareact.com/fdw" alt="" />
             <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
         </div>
     )
 }
            </div>
 
             {/* right and remove button */}
             <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button className="button mt-auto" onClick={addItemtoBasket}>Add to Basket</button>
            <button className="button mt-auto" onClick={removeItemFromBasket}>Remove From Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
 