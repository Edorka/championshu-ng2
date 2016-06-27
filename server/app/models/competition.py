from .. import db


class Competitiion(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    # Additional fields

    def __repr__(self):
        return 'Competitiion {}>'.format(self.id)
