from .. import db


class Competitor(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    # Additional fields

    def __repr__(self):
        return 'Competitor {}>'.format(self.id)
