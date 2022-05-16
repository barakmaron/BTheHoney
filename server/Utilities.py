
from fastapi.responses import JSONResponse
from hashlib import md5

class Utilities():

    def CreateCookie(content, result):
        response = JSONResponse(content=content)
        md_cookie = md5(f"{result['id']}{result['email']}".encode('utf-8')).hexdigest()
        response.set_cookie(key="BTheHoney", value=md_cookie)
        return response
