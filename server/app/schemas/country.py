from .. import ma
from ..models.country import Country

from marshmallow import fields

class CountrySchema(ma.ModelSchema):
    local_name = fields.Field(load_from='nativeName')
    id = fields.Integer(load_from='ccn3')

    class Meta:
        model = Country


country_schema = CountrySchema()
countries_schema = CountrySchema(many=True)
