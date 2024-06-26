#!/usr/bin/python3
""" Morereders application """
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from config import Config
from models import User


app = Flask(__name__)
app.config.from_object(Config)

mongo = PyMongo(app)

@app.route('/', strict_slashes=False)
def index():
    return 'welcome to morereaders'

@app.route('/add_user', methods=['POST'], strict_slashes=False)
def add_user():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    user = User(name=name, email=email, password=password)
    mongo.db.users.insert_one(user.to_dict())
    return jsonify({'message': 'user add'}), 201


if __name__ == '__main__':
    app.run(debug=True)
