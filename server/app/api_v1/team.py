from flask import jsonify, request

from . import api
from .. import db
from ..models.team import Team
from ..schemas.team import team_schema, teams_schema
from sqlalchemy.orm.exc import NoResultFound


@api.route('/teams', methods=['GET'])
def get_teams():
    all_teams = Team.query.all()
    result = teams_schema.dump(all_teams)
    return jsonify(result.data)


@api.route('/teams/<int:id>', methods=['GET'])
def get_team(id):
    try:
        team = Team.query.filter_by(id=id).one()
        result = team_schema.dump(team)
        return jsonify(result)
    except NoResultFound:
        return jsonify({"message": "Team not found"}), 404


@api.route('/teams', methods=['POST'])
def create_team():
    json_data = request.json
    if not json_data:
        return jsonify({}), 400
    data, errors = team_schema.load(json_data)
    if errors:
        return jsonify(errors), 422
    db.session.add(data)
    db.session.commit()
    return jsonify(team_schema.dump(data))

@api.route('/teams/<int:id>', methods=['PUT'])
def update_team(id):
    pass


@api.route('/teams/<int:id>', methods=['DELETE'])
def delete_team(id):
    pass
