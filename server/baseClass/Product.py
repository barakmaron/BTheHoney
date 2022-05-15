from pydantic import BaseModel

class Product(BaseModel):
    id: int
    name: str
    description: str
    image_url: str
    price: float
    recommendations: list