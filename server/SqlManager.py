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
            self.cursor.database = self.db_name
        except DB.Error as err:
            if err.errno == errorcode.ER_BAD_DB_ERROR:
                self.CreateDataBase()
                self.cursor.database = self.db_name
            else:
                print(err.msg)

    def CreateDataBase(self):
        try:
            self.RunCommand("CREATE DATABASE %s DEFAULT CHARACTER SER 'utf8';" %self.db_name)
        except DB.Error as err:
            print(f'Failed creating database: {err}')
          

    def RunCommand(self, cmd):
        print("RUNNING COMMAND: " + cmd)
        try:
            self.cursor.execute(cmd)
        except DB.Error as err:
            print (f'ERROR MESSAGE: {str(err.msg)}')
            print (f'WITH {cmd}')
        try:
            msg = self.cursor.fetchall()
        except:
            msg = self.cursor.fetchone()
        return msg

    def run(self):
        self._init_db()