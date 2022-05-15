from datetime import timedelta
from pydantic import BaseModel

class Order(BaseModel):
    id: int
    user_id: int
    products: list
    time: timedelta