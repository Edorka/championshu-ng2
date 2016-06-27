from flask import jsonify, request

from . import api
from .. import db
from ..models.competitor import Competitor
from ..schemas.competitor import competitor_schema, competitors_schema


@api.route('/competitors', methods=['GET'])
def get_competitors():
    pass


@api.route('/competitors/<int:id>', methods=['GET'])
def get_competitor(id):
    pass


@api.route('/competitors', methods=['POST'])
def create_competitor():
    pass


@api.route('/competitors/<int:id>', methods=['PUT'])
def update_competitor(id):
    pass


@api.route('/competitors/<int:id>', methods=['DELETE'])
def delete_competitor(id):
    pass
