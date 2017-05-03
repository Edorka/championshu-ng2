from flask import jsonify, request

from . import api
from .. import db
from ..models.country import Country
from ..schemas.country import country_schema, countries_schema
from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.exc import IntegrityError


@api.route('/countries', methods=['GET'])
def get_countries():
    all_countries = Country.query.all()
    result = countries_schema.dump(all_countries)
    return jsonify(items=result.data)


@api.route('/countries/<int:id>', methods=['GET'])
def get_country(id):
    try:
        country = Country.query.filter_by(id=id).one()
        result = country_schema.dump(country)
        return jsonify(result.data)
    except NoResultFound:
        return jsonify({"message": "Country not found"}), 404


@api.route('/countries', methods=['POST'])
def create_country():
    try:
        json_data = request.json
        if not json_data:
            return jsonify({}), 400
        country = Country()
        data, errors = country_schema.load(json_data, instance=country)
        if errors:
            return jsonify(errors), 422
        db.session.add(country)
        db.session.commit()
        result = country_schema.dump(country)
        return jsonify(result.data)
    except IntegrityError as error:
        return jsonify({'reason': error.message}), 500


@api.route('/countries/<int:id>', methods=['PUT'])
def update_country(id):
    json_data = request.json
    try:
        country = Country.query.filter_by(id=id).one()
        country_schema.load(json_data, instance=country, partial=True)
        result = country_schema.dump(country)
        return jsonify(result.data)
    except NoResultFound:
        return jsonify({"message": "Country not found"}), 404


@api.route('/countries/<int:id>', methods=['DELETE'])
def delete_country(id):
    try:
        country = Country.query.filter_by(id=id).one()
        db.session.delete(country)
        db.session.commit()
        return jsonify({"confirmed": True}), 200
    except NoResultFound:
        return jsonify({"message": "Country not found"}), 404
