from .. import ma
from ..models.team import Team


class TeamSchema(ma.ModelSchema):

    class Meta:
        model = Team


team_schema = TeamSchema()
teams_schema = TeamSchema(many=True)
