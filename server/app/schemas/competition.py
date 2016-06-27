from .. import ma
from ..models.competitiion import Competitiion


class CompetitiionSchema(ma.ModelSchema):

    class Meta:
        model = Competitiion


competitiion_schema = CompetitiionSchema()
competitiions_schema = CompetitiionSchema(many=True)
