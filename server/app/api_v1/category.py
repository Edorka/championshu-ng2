from flask import jsonify, request

from . import api
from .. import db
from ..models.category import Category
from ..schemas.category import category_schema, categories_schema


@api.route('/categories', methods=['GET'])
def get_categories():
    pass


@api.route('/categories/<int:id>', methods=['GET'])
def get_category(id):
    pass


@api.route('/categories', methods=['POST'])
def create_category():
    pass


@api.route('/categories/<int:id>', methods=['PUT'])
def update_category(id):
    pass


@api.route('/categories/<int:id>', methods=['DELETE'])
def delete_category(id):
    pass
