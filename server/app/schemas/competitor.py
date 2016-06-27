from .. import ma
from ..models.competitor import Competitor


class CompetitorSchema(ma.ModelSchema):

    class Meta:
        model = Competitor


competitor_schema = CompetitorSchema()
competitors_schema = CompetitorSchema(many=True)
