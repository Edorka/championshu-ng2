from flask import jsonify, request

from . import api
from .. import db
from ..models.team import Team
from ..schemas.team import team_schema, teams_schema


@api.route('/teams', methods=['GET'])
def get_teams():
    pass


@api.route('/teams/<int:id>', methods=['GET'])
def get_team(id):
    pass


@api.route('/teams', methods=['POST'])
def create_team():
    pass


@api.route('/teams/<int:id>', methods=['PUT'])
def update_team(id):
    pass


@api.route('/teams/<int:id>', methods=['DELETE'])
def delete_team(id):
    pass
