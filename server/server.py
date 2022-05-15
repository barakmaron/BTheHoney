import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from hashlib import md5

from SqlManager import SqlManager

from baseClass.User import User

app = FastAPI()
db_manager = SqlManager()
db_manager.run()

@app.post('/login')
async def login(user: User):
    res = db_manager.loginUser(user)
    if res['status']:
        content = {"status": "Login user successfully"}
        response = JSONResponse(content=content)
        md_cookie = md5(f"{res['id']}{res['email']}".encode('utf-8')).hexdigest()
        response.set_cookie(key="BTheHoney", value=md_cookie)
        return response
    else:
        raise HTTPException(status_code=400, detail="Unable to login user")

@app.post('/register')
async def register(user: User):
    res = db_manager.registerUser(user)
    if res['status']:
        content = {"status": "Registed successfully"}
        response = JSONResponse(content=content)
        md_cookie = md5(f"{res['id']}{res['email']}".encode('utf-8')).hexdigest()
        response.set_cookie(key="BTheHoney", value=md_cookie)
        return response
    else:
        raise HTTPException(status_code=400, detail="Unable to register user")

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

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)