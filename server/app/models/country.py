from .. import db


class Country(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    # Additional fields
    name = db.Column(db.String)
    local_name = db.Column(db.String)
    region = db.Column(db.String)
    subregion = db.Column(db.String)


    def __repr__(self):
        return '<Country {}>'.format(self.name)
