#!/usr/bin/env python3
"""
Basic Flask app setup
"""

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/', methods=['GET'], strict_slashes=False)
def index():
    """
    renders hello world
    """
    return render_template('0-index.html')
