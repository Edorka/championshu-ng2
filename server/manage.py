#! /usr/bin/env python

import os

from flask_script import Manager
from flask_sqlalchemy import SQLAlchemy
from app import create_app, db
from flask_migrate import Migrate, MigrateCommand

app = create_app(os.getenv('APP_CONFIG', 'default'))
manager = Manager(app)
migrate = Migrate(app, db)
manager.add_command('db', MigrateCommand)


@manager.shell
def make_shell_context():
    return dict(app=app, db=db)


@manager.command
def createdb():
    from app.models import team, category, country
    # import the rest of the models aswell
    db.create_all()



if __name__ == '__main__':
    manager.run()
