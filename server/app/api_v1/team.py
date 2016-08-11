from flask import jsonify, request

from . import api
from .. import db
from ..models.team import Team
from ..schemas.team import team_schema, teams_schema
from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.exc import IntegrityError


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
        return jsonify(result.data)
    except NoResultFound:
        return jsonify({"message": "Team not found"}), 404


@api.route('/teams', methods=['POST'])
def create_team():
    try:
        json_data = request.json
        if not json_data:
            return jsonify({}), 400
        team = Team()
        data, errors = team_schema.load(json_data, instance=team)
        if errors:
            return jsonify(errors), 422
        db.session.add(team)
        db.session.commit()
        result = team_schema.dump(team)
        return jsonify(result.data)
    except IntegrityError as error:
        return jsonify({'reason': error.message})
    

@api.route('/teams/<int:id>', methods=['PUT'])
def update_team(id):
    json_data = request.json
    try:
        team = Team.query.filter_by(id=id).one()
        team_schema.load(json_data, instance=team, partial=True)
        result = team_schema.dump(team)
        return jsonify(result.data)
    except NoResultFound:
        return jsonify({"message": "Team not found"}), 404


@api.route('/teams/<int:id>', methods=['DELETE'])
def delete_team(id):
    try:
        team = Team.query.filter_by(id=id).one()
        db.session.delete(team)
        db.session.commit()
        return jsonify({"confirmed": True}), 200
    except NoResultFound:
        return jsonify({"message": "Team not found"}), 404


