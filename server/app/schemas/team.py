from .. import ma
from ..models.team import Team
from marshmallow import fields
from .country import CountrySchema

class TeamSchema(ma.ModelSchema):
    team = fields.Nested(CountrySchema, only=['id', 'name', 'local_name'])

    class Meta:
        model = Team


team_schema = TeamSchema()
teams_schema = TeamSchema(many=True)
