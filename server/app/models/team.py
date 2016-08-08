from .. import db


class Team(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    # Additional fields
    name = db.Column(db.String, unique=True)
    

    def __repr__(self):
        return 'Team {}>'.format(self.name)
