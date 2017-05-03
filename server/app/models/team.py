from .. import db


class Team(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    # Additional fields
    name = db.Column(db.String, unique=True)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'))
    country = db.relationship('Country')


    def __repr__(self):
        return '<Team {}>'.format(self.name)
