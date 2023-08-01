#!/usr/bin/env python3
"""Force locale with URL parameter"""

import babel
from flask import Flask, render_template, request
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)


class Config:
    """
    Config class
    """
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'
    LANGUAGES = ['en', 'fr']


app.config.from_object(Config)


@babel.localeselector
def get_locale():
    """
    function that detect if the incoming request contains locale
    argument and ifs value is a supported locale, return it.
    If not or if the parameter is not present, resort to the previous 
    default behavior.
    """
    locale = request.args.get('locale')
    if locale:
        return locale
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/', methods=['GET'], strict_slashes=False)
def index():
    """
    renders 4-index.html /displays hello world
    """
    return render_template('4-index.html')


if __name__ == '__main__':
    app.run(debug=True)
