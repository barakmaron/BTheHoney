import React from 'react';

import '../css/Products.scss';
import Button from './Button';

const Products = () => {
    const fake_products = [
        {
            "id": 5,
            "name": "pure honey",
            "description": "5kg jar 100% pure honey",
            "image_url": "https://media.istockphoto.com/photos/honey-picture-id950996184",
            "price": 15.55,
            "recommendations": [
                {
                    "name": "barak",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "mark",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "idan",
                    "text": "The best honey money can buy."
                }
            ]
        },{
            "id": 5,
            "name": "pure honey",
            "description": "5kg jar 100% pure honey",
            "image_url": "https://media.istockphoto.com/photos/honey-picture-id950996184",
            "price": 15.55,
            "recommendations": [
                {
                    "name": "barak",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "mark",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "idan",
                    "text": "The best honey money can buy."
                }
            ]
        },{
            "id": 5,
            "name": "pure honey",
            "description": "5kg jar 100% pure honey",
            "image_url": "https://media.istockphoto.com/photos/honey-picture-id950996184",
            "price": 15.55,
            "recommendations": [
                {
                    "name": "barak",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "mark",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "idan",
                    "text": "The best honey money can buy."
                }
            ]
        },{
            "id": 5,
            "name": "pure honey",
            "description": "5kg jar 100% pure honey",
            "image_url": "https://media.istockphoto.com/photos/honey-picture-id950996184",
            "price": 15.55,
            "recommendations": [
                {
                    "name": "barak",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "mark",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "idan",
                    "text": "The best honey money can buy."
                }
            ]
        },{
            "id": 5,
            "name": "pure honey",
            "description": "5kg jar 100% pure honey",
            "image_url": "https://media.istockphoto.com/photos/honey-picture-id950996184",
            "price": 15.55,
            "recommendations": [
                {
                    "name": "barak",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "mark",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "idan",
                    "text": "The best honey money can buy."
                }
            ]
        },
        {
            "id": 7,
            "name": "pure honey",
            "description": "5kg jar 100% pure honey",
            "image_url": "https://media.istockphoto.com/photos/honey-picture-id950996184",
            "price": 15.55,
            "recommendations": [
                {
                    "name": "barak",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "mark",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "idan",
                    "text": "The best honey money can buy."
                }
            ]
        },
        {
            "id": 9,
            "name": "pure honey",
            "description": "5kg jar 100% pure honey",
            "image_url": "https://media.istockphoto.com/photos/honey-picture-id950996184",
            "price": 15.55,
            "recommendations": [
                {
                    "name": "barak",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "mark",
                    "text": "The best honey money can buy."
                },
                {
                    "name": "idan",
                    "text": "The best honey money can buy."
                }
            ]
        }
    ]
  return (
    <div className='products'>
      {
          fake_products.map((value, key) => {
              return(
              <div key={key} className="product">
                <h4>{value.name}</h4>
                <img alt={value.name} src={value.image_url} />
                <span>{value.price}</span>
                <Button onClick={() => {}} id={"product" + key} text="Buy Now"></Button>
              </div>);
          })
      }
    </div>
  )
}

export default Products
