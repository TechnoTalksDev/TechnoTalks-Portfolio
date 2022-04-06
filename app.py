from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def index(): 
    return render_template("index.html")

@app.errorhandler(404)
def not_found(e):
    return render_template("grey.html")

if __name__ == "__main__":
    os.environ["FLASK_ENV"] = "development"
    app.run(host="0.0.0.0", port=80, debug=True)