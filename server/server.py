from fastapi import FastAPI

app = FastAPI()

@app.post('/login')
async def login():
    return {"login"}

@app.post('/register')
async def register():
    return {"reg"}

@app.get('/product/{product_id}')
async def get_product(product_id):
    return {"product_id": product_id}

@app.get('/products')
async def get_products():
    return {"get products"}

@app.get('/order/{order_id}')
async def get_order(order_id):
    return {"order_id": order_id}

@app.get('/recommendations/{product_id}')
async def get_recommendations(product_id):
    return {"recomm": product_id}