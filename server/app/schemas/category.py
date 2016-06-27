from .. import ma
from ..models.category import Category


class CategorySchema(ma.ModelSchema):

    class Meta:
        model = Category


category_schema = CategorySchema()
categories_schema = CategorySchema(many=True)
