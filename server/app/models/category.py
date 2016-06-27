from .. import db


class Category(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    # Additional fields

    def __repr__(self):
        return 'Category {}>'.format(self.id)
