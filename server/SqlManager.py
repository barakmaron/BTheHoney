from mysql import connector as DB

from server.Config import Config

class SqlManager():

    def __init__(self):
        self.db = DB.connect(host = Config.HOST, user = Config.USER, password = Config.PASSWORD)

    def _init_db(self):
        cursor = self.db.cursor()
        cursor.execute("SHOW DATABASES")
        for x in cursor:
            print(x)

    def run(self):
        self._init_db()