from collections import namedtuple
from mysql import connector as DB
from mysql.connector import errorcode

from Config import Config

class SqlManager():

    def __init__(self):        
        self.db = DB.connect(host = Config.HOST, user = Config.USER, password = Config.PASSWORD)
        self.db_name = "BTheHoney"
        if not self.db.is_connected():
            raise Exception("Cant connect to mysql database.")
        else:
            self.cursor = self.db.cursor(named_tuple = True)

    def _init_db(self):
        try:
            # check if data base exists
            self.db.database = self.db_name
            self.createTables()
        except DB.Error as err:
            if err.errno == errorcode.ER_BAD_DB_ERROR:
                self.createDataBase()
                self.db.database = self.db_name
                self.createTables()
            else:
                print(err.msg)

    def createDataBase(self):
        try:
            self.runQuery("CREATE DATABASE %s DEFAULT CHARACTER SER 'utf8';" %self.db_name)
        except DB.Error as err:
            print(f'Failed creating database: {err}')

    def createTables(self):
        query = ("CREATE TABLE IF NOT EXISTS `users` ( `id` INT NOT NULL AUTO_INCREMENT , `email` TEXT NOT NULL , `password` TEXT NOT NULL , `full_name` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;")
        self.runQuery(query)
        query = ("CREATE TABLE IF NOT EXISTS `products` ( `id` INT NOT NULL AUTO_INCREMENT , `name` TEXT NOT NULL , `description` TEXT NOT NULL , `price` FLOAT NOT NULL , `image_url` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;")
        self.runQuery(query)
        query = ("CREATE TABLE IF NOT EXISTS `recommendations` ( `id` INT NOT NULL AUTO_INCREMENT , `user_id` INT NOT NULL , `product_id` INT NOT NULL , `rank` INT NOT NULL , `text` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;")
        self.runQuery(query)

    def runQuery(self, query):
        print(f"RUNNING QUERY: {query}")
        try:
            self.cursor.execute(query)
        except DB.Error as err:
            print (f'ERROR MESSAGE: {str(err.msg)}')
            print (f'WITH {query}')
        try:
            msg = self.cursor.fetchall()
        except:
            msg = self.cursor.fetchone()
        return msg

    def run(self):
        self._init_db()